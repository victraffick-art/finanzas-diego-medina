import { Transaction } from "@/types";
import { ArrowDownRight, ArrowUpRight, DollarSign, Wallet } from "lucide-react";

export default function FinancialSummary({ transactions }: { transactions: Transaction[] }) {
  const ingresos = transactions
    .filter((t) => t.type === "ingreso")
    .reduce((acc, curr) => acc + curr.amount, 0);
  
  const egresos = transactions
    .filter((t) => t.type === "egreso")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = ingresos - egresos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Balance Card */}
      <div className="p-6 bg-gradient-to-br from-indigo-900/80 to-blue-900/80 border border-blue-800/50 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <Wallet className="w-6 h-6 text-blue-300" />
          </div>
          <h3 className="text-lg font-medium text-blue-100">Balance Total</h3>
        </div>
        <p className="text-4xl font-bold text-white tracking-tight">
          ${balance.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Ingresos Card */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl"></div>
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <ArrowUpRight className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300">Ingresos</h3>
        </div>
        <p className="text-3xl font-bold text-emerald-400 tracking-tight">
          ${ingresos.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
        </p>
      </div>

      {/* Egresos Card */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-red-500/10 rounded-xl">
            <ArrowDownRight className="w-6 h-6 text-red-400" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300">Egresos</h3>
        </div>
        <p className="text-3xl font-bold text-red-400 tracking-tight">
          ${egresos.toLocaleString('es-MX', { minimumFractionDigits: 2 })}
        </p>
      </div>
    </div>
  );
}
