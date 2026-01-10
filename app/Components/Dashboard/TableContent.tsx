import { TableCell, TableRow } from '@/components/ui/table';
import { Copy, Trash2 } from 'lucide-react';
import React from 'react';

export interface URL {
    _v: number,
    _id: string,
    createdAt: string,
    redirectURL: string,
    shortId: string,
    updatedAt: string,
    visitHistory: [
        timestamp: number,
        _id: string
    ]
}

interface TableContent{
    urls:URL[],
    handleCopy:(shortUrl:string)=>void,
    handleDelete:(id:string)=>void
}

const TableContent = ({urls,handleCopy,handleDelete}:TableContent) => {
    return (
        <>
            {urls?.map((url: URL) => (
                <TableRow
                    key={url.shortId}
                    className="bg-(--background-color) h-15"
                >
                    <TableCell className="text-(--primary)">{url.shortId}</TableCell>
                    <TableCell className="flex items-center gap-2 py-5 text-(--primary)">
                        {`https://url-shortner-backend-mocha.vercel.app/${url.shortId}`}
                        <button onClick={() => handleCopy(`https://url-shortner-backend-mocha.vercel.app/${url.shortId}`)}>
                            <Copy className=" text-(--primary) cursor-pointer" />
                        </button>
                    </TableCell>
                    <TableCell className="text-(--primary) gap-2">{url.visitHistory.length}</TableCell>

                    <TableCell className="text-(--primary) gap-2">{new Date(url.createdAt).toLocaleString()}</TableCell>
                    <TableCell className="">
                        <button onClick={() => handleDelete(url._id)}>
                            <Trash2 className=" text-red-500 cursor-pointer" />
                        </button>
                    </TableCell>
                </TableRow>
            ))}
        </>
    );
};

export default TableContent;