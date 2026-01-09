"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserUrlQuery, useHandleDeleteShortLinkMutation } from "@/lib/features/api/apiSlice";

import { Copy, Trash2 } from "lucide-react";
import useAuthContext from "../Hook/useAuthContext";



const DashboardTable = () => {



  const [handleDeleteShortLink,] = useHandleDeleteShortLinkMutation()




  const handleCopy = (shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!");
  };

  const handleDelete = (urlId: string) => {
    handleDeleteShortLink(urlId)
  };


  const { user } = useAuthContext()


  const userId = user?.id
  const {
    data,
    refetch

  } = useGetUserUrlQuery(userId!, {
    skip: !userId,
  });



  const urls = data?.urls;
  console.log(urls)

  let tableContent;


  if (data) {
    tableContent = <>
      {urls?.map((url) => (
        <TableRow
          key={url.shortId}
          className="bg-(--background-color) h-15"
        >
          <TableCell className="text-(--primary)">{url.shortId}</TableCell>
          <TableCell className="flex items-center gap-2 py-5 text-(--primary)">
            {`http://localhost:5000/${url.shortId}`}
            <button onClick={() => handleCopy(`http://localhost:5000/${url.shortId}`)}>
              <Copy className=" text-(--primary) cursor-pointer" />
            </button>
          </TableCell>
          <TableCell className="text-(--primary) gap-2">{url.visitHistory.length}</TableCell>
          <TableCell className="text-(--primary) gap-2">{url.createdAt}</TableCell>
          <TableCell className="">
            <button onClick={() => handleDelete(url._id)}>
              <Trash2 className=" text-red-500 cursor-pointer" />
            </button>
          </TableCell>
        </TableRow>
      ))}
    </>
  }


  return (
    <div
      className="overflow-x-auto border px-4 py-3 lg:h-145 overflow-scroll"
      style={{ borderColor: "var(--surface-border)" }}
    >
      <Table>
        <TableCaption className="text-white border border-(--surface-border) py-3">
          A list of your shortened URLs.
        </TableCaption>

        <TableHeader>
          <TableRow style={{ backgroundColor: "var(--background-color)" }}>
            <TableHead style={{ color: "var(--primary)" }}>Short Code</TableHead>
            <TableHead style={{ color: "var(--primary)" }}>Short URL</TableHead>
            <TableHead style={{ color: "var(--primary)" }}>Clicks</TableHead>
            <TableHead style={{ color: "var(--primary)" }}>Created</TableHead>
            <TableHead style={{ color: "var(--primary)" }}>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableContent}
        </TableBody>

      </Table>
    </div>
  );
};

export default DashboardTable;
