import Link from 'next/link';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <main>
      <h1>Lista completa degli utenti</h1>
      <ul>
        {users.slice(0, 10).map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <strong>{user.name}</strong>
            </Link> - {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}