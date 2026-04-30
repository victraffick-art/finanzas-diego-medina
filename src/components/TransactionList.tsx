"use client";

import { Transaction } from "@/types";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { ArrowDownRight, ArrowUpRight, Calendar, Tag } from "lucide-react";

export default function TransactionList({ transactions }: { transactions: Transaction[] }) {
  if (transactions.length === 0) {
    return (
      <div className="p-8 text-center bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg">
        <p className="text-zinc-500">No hay transacciones registradas.</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-lg overflow-hidden">
      <div className="p-5 border-b border-zinc-800">
        <h3 className="text-xl font-bold text-white">Transacciones Recientes</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-950/50 text-zinc-400">
            <tr>
              <th className="px-5 py-4 font-medium">Descripción</th>
              <th className="px-5 py-4 font-medium">Categoría</th>
              <th className="px-5 py-4 font-medium">Fecha</th>
              <th className="px-5 py-4 font-medium text-right">Monto</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-zinc-800/20 transition-colors">
                <td className="px-5 py-4">
                  <div className="font-medium text-white">{t.description}</div>
                  <div className="text-xs text-zinc-500 capitalize flex items-center gap-1 mt-1">
                    {t.type === 'ingreso' ? (
                      <span className="text-emerald-400 flex items-center"><ArrowUpRight className="w-3 h-3 mr-1"/> Ingreso</span>
                    ) : (
                      <span className="text-red-400 flex items-center"><ArrowDownRight className="w-3 h-3 mr-1"/> Egreso</span>
                    )}
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
                    <Tag className="w-3 h-3 mr-1" />
                    {t.category}
                  </span>
                </td>
                <td className="px-5 py-4 text-zinc-400">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-2" />
                    {format(new Date(t.date), "dd MMM, yyyy", { locale: es })}
                  </div>
                </td>
                <td className={`px-5 py-4 text-right font-medium ${t.type === 'ingreso' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {t.type === 'ingreso' ? '+' : '-'}${Math.abs(t.amount).toLocaleString('es-MX', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
