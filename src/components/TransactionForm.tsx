"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { PlusCircle } from "lucide-react";

export default function TransactionForm({ onAdd }: { onAdd: () => void }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "ingreso",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) throw new Error("No user found");

      const { error } = await supabase.from("transactions").insert([
        {
          description: formData.description,
          amount: parseFloat(formData.amount),
          type: formData.type,
          category: formData.category,
          date: formData.date,
          user_id: user.id,
        },
      ]);

      if (error) throw error;

      setFormData({
        description: "",
        amount: "",
        type: "ingreso",
        category: "",
        date: new Date().toISOString().split("T")[0],
      });
      onAdd();
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Hubo un error al guardar la transacción.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
        <PlusCircle className="w-5 h-5 text-blue-400" />
        Nueva Transacción
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Descripción</label>
            <input
              type="text"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Ej. Salario, Supermercado"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Monto ($)</label>
            <input
              type="number"
              required
              step="0.01"
              min="0"
              value={formData.amount}
              onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="0.00"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Tipo</label>
            <select
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            >
              <option value="ingreso">Ingreso</option>
              <option value="egreso">Egreso</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">Categoría</label>
            <input
              type="text"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Ej. Alimentación"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-400 mb-1">Fecha</label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium rounded-xl shadow-lg transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
        >
          {loading ? "Guardando..." : "Guardar Transacción"}
        </button>
      </form>
    </div>
  );
}
