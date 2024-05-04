import Link from "next/link";

async function getData() {
    const res = await fetch('http://127.0.0.1:8000/api/customers')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
const customers = await getData()

export default function Page() {
    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900 py-10">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <div className="sm:flex sm:items-center">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-white">Customers</h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    A list of all the customers in your database including their Customer Id, Title, Lastname, Firstname, Postal, code, City, Email.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead>
                                        <tr>
                                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
                                                Id
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Title
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Lastname
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Firstname
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Postal code
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                City
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Email
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                <span className="sr-only">Show orders</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                        {customers.map((customer) => (
                                            <tr key={customer.email}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {customer.customer_id}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.title}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.lastname}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.firstname}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.postal_code}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.city}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{customer.email}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                    <Link href={`/customers/${customer.customer_id}`} className="text-indigo-400 hover:text-indigo-300">Show orders</Link>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
