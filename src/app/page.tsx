"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Auth from "@/components/Auth";
import FinancialSummary from "@/components/FinancialSummary";
import TransactionForm from "@/components/TransactionForm";
import TransactionList from "@/components/TransactionList";
import { Transaction } from "@/types";
import { LogOut, Activity } from "lucide-react";

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) fetchTransactions();
      else setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) fetchTransactions();
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("transactions")
      .select("*")
      .order("date", { ascending: false })
      .order("created_at", { ascending: false });

    if (!error && data) {
      setTransactions(data as Transaction[]);
    }
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  if (loading && !session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4">
            <Activity className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Proyecto Finanzas
          </h1>
          <p className="text-zinc-400 mt-2 text-lg">Controla tu dinero inteligentemente</p>
        </div>
        <div className="w-full max-w-md">
          <Auth onAuthSuccess={fetchTransactions} />
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 pb-20">
      {/* Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            <h1 className="text-xl font-bold text-white tracking-tight">Finanzas</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-zinc-400 hidden md:block">
              {session.user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors bg-zinc-800 hover:bg-zinc-700 px-3 py-2 rounded-lg"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden md:inline">Salir</span>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
        <FinancialSummary transactions={transactions} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <TransactionForm onAdd={fetchTransactions} />
          </div>
          <div className="lg:col-span-2">
            <TransactionList transactions={transactions} />
          </div>
        </div>
      </div>
    </main>
  );
}
