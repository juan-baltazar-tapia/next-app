import React from "react";
import { sort } from "fast-sort";
import Link from "next/link";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  interface User {
    id: number;
    name: string;
    email: string;
  }

  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();
  // sort users by firstname in ascending  order by defuult
  const sortedUsers = sort(users).asc(
    sortOrder == "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <div>Users {sortOrder}</div>
      <table className="table table-bordered">
        <tr>
          <th>
            <Link href="/users?sortOrder=name">Name</Link>
          </th>
          <th>
            <Link href="/users?sortOrder=email">Email</Link>
          </th>
        </tr>

        {sortedUsers.map((user) => (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default UsersPage;
