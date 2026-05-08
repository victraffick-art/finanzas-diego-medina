-- Ejecuta este script en el editor SQL de Supabase para crear la tabla de contactos del Ebook

CREATE TABLE IF NOT EXISTS clientes_ebook (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  correo text NOT NULL,
  ebook text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Permisos RLS (Row Level Security) para permitir que el cliente anon inserte datos
ALTER TABLE clientes_ebook ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir insertar a usuarios anonimos" ON clientes_ebook
  FOR INSERT WITH CHECK (true);

-- (Opcional) Si quieres ver los registros desde el dashboard, permite SELECT a anonimos o solo a ti:
CREATE POLICY "Permitir leer a todos" ON clientes_ebook
  FOR SELECT USING (true);
