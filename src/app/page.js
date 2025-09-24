import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Benvenuto nella homepage</h1>
      <p>Questa è la schermata iniziale del tuo progetto Next.js.</p>

      <Link href="/users">
        <button style={{ padding: '10px 20px', marginTop: '20px' }}>
          Vai alla lista utenti
        </button>
      </Link>
    </main>
  );
}
