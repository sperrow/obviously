import { useState } from 'react';
import Image from 'next/image';
import { TrashIcon } from '@radix-ui/react-icons';

import './table.css';

import { Dataset, defaultData, imageNames } from './data';

import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

const columnHelper = createColumnHelper<Dataset>();

const columns = [
    columnHelper.display({
        id: 'actions',
        header: () => <input type="checkbox" />,
        cell: () => <input type="checkbox" />,
    }),
    columnHelper.accessor('name', {
        header: 'Dataset Name',
        cell: (info) => (
            <div className="flex items-center">
                <Image
                    src={imageNames[info.row.original.type]}
                    alt={info.row.original.type}
                    width={28}
                    height={28}
                ></Image>
                <p className="ml-2">{info.getValue()}</p>
            </div>
        ),
    }),
    columnHelper.accessor('status', {
        header: 'Status',
        cell: (info) => (
            <span
                className={
                    info.getValue() === 'Error'
                        ? 'py-1 px-1.5 rounded-md border border-red-500 text-red-600 bg-red-100 text-sm'
                        : 'py-1 px-1.5 rounded-md border border-green-500 text-green-800 bg-green-100 text-sm'
                }
            >
                <span>● {info.getValue()}</span>
            </span>
        ),
    }),
    columnHelper.accessor('created_at', {
        header: 'Created at',
        cell: (info) => new Date(info.getValue()).toDateString(),
    }),
    columnHelper.accessor('created_by_email', {
        header: 'Created by',
        cell: (info) => (
            <div>
                <p>{info.row.original.created_by_name}</p>
                <p>{info.getValue()}</p>
            </div>
        ),
    }),
    columnHelper.display({
        id: 'delete',
        cell: () => (
            <button>
                <TrashIcon />
            </button>
        ),
    }),
];

export default function LibraryTable() {
    const [data, _setData] = useState(() => [...defaultData]);
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        enableRowSelection: true,
        onRowSelectionChange: setRowSelection,
    });

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                className="px-3 py-1 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm mb-4"
                required
            />
            <table className="w-full border-separate border-spacing-0 text-md rounded-lg border">
                <thead className="left-0 top-0 z-20">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id} className="border-0 border-b text-left p-4 text-sm">
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id} className="border-b text-left p-4">
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
