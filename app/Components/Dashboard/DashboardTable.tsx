"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetUserUrlQuery, useHandleDeleteShortLinkMutation } from "@/lib/features/api/apiSlice";

import useAuthContext from "../Hook/useAuthContext";
import TableContent from "./TableContent";


const DashboardTable = () => {



  const [handleDeleteShortLink] = useHandleDeleteShortLinkMutation()

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
  } = useGetUserUrlQuery(userId!, {
    skip: !userId,
  });
  const urls = data?.urls;

  



  let tableContent;
  if (data) {
    tableContent = <TableContent urls={urls} handleCopy={handleCopy} handleDelete={handleDelete} />
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
