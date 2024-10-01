"use client";
import React from "react";

function UserTable({ users, setOrderBy, orderBy }) {
  return (
    <div className="mx-4">
      <table className="w-full border border-gray-600">
        <thead>
          <tr>
            <th className="border border-gray-600">SL</th>
            <th
              className="border border-gray-600 cursor-pointer hover:bg-gray-500"
              onClick={() => {
                setOrderBy("name");
              }}
            >
              Name {orderBy == "name" ? <span>⬆</span> : <span>⬇</span>}
            </th>
            <th className="border border-gray-600 hover:bg-gray-500">Email</th>
            <th
              className="border border-gray-600 cursor-pointer hover:bg-gray-500"
              onClick={() => {
                setOrderBy("cpf");
              }}
            >
              CPF {orderBy == "cpf" ? <span>⬆</span> : <span>⬇</span>}
            </th>
          </tr>
        </thead>
        <tbody className="font-mono">
          {users.map((user, idx) => {
            const { name, email, cpf, id } = user.node;
            return (
              <tr
                key={id}
                className={`text-center ${
                  cpf
                    ? "bg-green-400 hover:bg-green-800 hover:text-white"
                    : "bg-red-200 hover:bg-red-800 hover:text-white"
                }`}
              >
                <td className="border border-gray-600">{idx + 1}</td>
                <td className="border border-gray-600">
                  {name ? name : "null"}
                </td>
                <td className="border border-gray-600">
                  {email ? email : "null"}
                </td>
                <td className="border border-gray-600">{cpf?cpf:"-"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
