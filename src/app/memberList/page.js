import React from "react";

const MembersPage = () => {


  return (
    <main>
      <section className="px-6 py-12 bg-gray-50">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
          Youth Parliament Members
        </h2>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 gap-4">
          <input
            id="searchInput"
            type="text"
            placeholder="Search members by CNIC, name or PK..."
            aria-label="Search members"
            className="w-full md:w-96 px-4 py-3 rounded-lg border border-gray-300 shadow-sm
                   focus:ring-2 focus:ring-green-500 focus:outline-none"
          />

          <button
            id="clearBtn"
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg
                   hover:bg-green-700 transition shadow-md"
            type="button"
          >
            Clear
          </button>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto shadow-xl rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-full text-sm text-gray-700" id="membersTable">
            {/* Table Head */}
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">#</th>
                <th className="py-3 px-4 text-left font-semibold">Picture</th>
                <th className="py-3 px-4 text-left font-semibold">Name</th>
                <th className="py-3 px-4 text-left font-semibold">Father’s Name</th>
                <th className="py-3 px-4 text-left font-semibold">District</th>
                <th className="py-3 px-4 text-left font-semibold">PK</th>
                <th className="py-3 px-4 text-left font-semibold">CNIC</th>
                <th className="py-3 px-4 text-left font-semibold">Email</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody id="membersTbody" className="divide-y divide-gray-200">
              {/* example rows */}
              <tr className="hover:bg-green-50 transition">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">
                  <img
                    src="../images/members/member1.jpg"
                    alt="Musa Bukhari"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                </td>
                <td className="py-3 px-4 cell-name font-medium text-gray-900">Musa Bukhari</td>
                <td className="py-3 px-4">Ahmed Bukhari</td>
                <td className="py-3 px-4">Bannu</td>
                <td className="py-3 px-4 cell-pk font-semibold text-green-700">PK-88</td>
                <td className="py-3 px-4 cell-cnic">12345-1234567-1</td>
                <td className="py-3 px-4 text-blue-600 underline">musa@example.com</td>
              </tr>

              <tr className="hover:bg-green-50 transition">
                <td className="py-3 px-4">2</td>
                <td className="py-3 px-4">
                  <img
                    src="../images/members/member2.jpg"
                    alt="Ali Khan"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                </td>
                <td className="py-3 px-4 cell-name font-medium text-gray-900">Ali Khan</td>
                <td className="py-3 px-4">Zafar Khan</td>
                <td className="py-3 px-4">Peshawar</td>
                <td className="py-3 px-4 cell-pk font-semibold text-green-700">PK-72</td>
                <td className="py-3 px-4 cell-cnic">54321-7654321-0</td>
                <td className="py-3 px-4 text-blue-600 underline">ali.khan@example.com</td>
              </tr>

              <tr className="hover:bg-green-50 transition">
                <td className="py-3 px-4">3</td>
                <td className="py-3 px-4">
                  <img
                    src="../images/members/member3.jpg"
                    alt="Uzair Aijaz"
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                </td>
                <td className="py-3 px-4 cell-name font-medium text-gray-900">Uzair Aijaz</td>
                <td className="py-3 px-4">Aijaz Qureshi</td>
                <td className="py-3 px-4">Mansehra</td>
                <td className="py-3 px-4 cell-pk font-semibold text-green-700">PK-74</td>
                <td className="py-3 px-4 cell-cnic">98765-4321098-7</td>
                <td className="py-3 px-4 text-blue-600 underline">uzair@example.com</td>
              </tr>

              {/* Add remaining rows exactly the same way as above */}

              {/* "no results" row (hidden by default) */}
              <tr id="noResultsRow" className="hidden">
                <td colSpan="8" className="py-8 text-center text-gray-500">
                  No members match your search.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
export default MembersPage;

 