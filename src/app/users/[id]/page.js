export default async function UserDetail({ params }) {
  const {id} = await Promise.resolve(params);
  const res = await fetch(`http://localhost:3000/api/users/${id}`, {cache: "no-store"});
  const user = await res.json();

  return (
    <main>
      <h1>Dati utente</h1>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Telefono:</strong> {user.phone}</p>
      <p><strong>Sito web:</strong> {user.website}</p>
      <p><strong>Azienda:</strong> {user.company.name}</p>
      <p><strong>Indirizzo:</strong> {user.address.street}, {user.address.city}</p>
    </main>
  );
}