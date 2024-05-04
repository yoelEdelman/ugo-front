import Link from "next/link";

async function getData(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/customers/${id}/orders`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

const countTotalPrice = function(orders) {
    return orders.map((order) => parseInt(order.price)).reduce((a, c) => a + c, 0);
}


export default async function Page({ params }: { params: { customerId: string } }) {
    const orders = await getData(params.customerId)

    return (
        <div className="bg-gray-900">
            <div className="mx-auto max-w-7xl">
                <div className="bg-gray-900 py-10">
                    <div className="px-4 sm:px-6 lg:px-8">

                        <Link href={`/customers`}
                              type="button"
                              className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >Back to customers</Link>

                        <div className="sm:flex sm:items-center mt-4">
                            <div className="sm:flex-auto">
                                <h1 className="text-base font-semibold leading-6 text-white">Orders</h1>
                                <p className="mt-2 text-sm text-gray-300">
                                    A list of all orders made by a specific customer registered in your database including Last name, Purchase identifier, Product id, Quantity, Price, Currency, Date.
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
                                                Last name
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Purchase identifier
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Product id
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Quantity
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Price
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Currency
                                            </th>
                                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">
                                                Date
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-800">
                                        {orders.map((order) => (
                                            <tr key={order.customer_id.customer_id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                                                    {order.customer_id.lastname}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.purchase_identifier}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.product_id}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.quantity}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.price}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.currency}</td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{order.date}</td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <hr/>
                                    <span>Total: {countTotalPrice(orders)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}