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
import React from "react";
import { Copy, Trash2 } from "lucide-react";

interface UrlItem {
  originalUrl: string;
  shortCode: string;
  shortUrl: string;
  clicks: number;
  createdAt: string;
}

const DashboardTable = () => {
  const urls: UrlItem[] = [
    {
      originalUrl: "https://example.com/very-long-url-1",
      shortCode: "abcfgsdg123",
      shortUrl: "https://short.ly/abc123",
      clicks: 12,
      createdAt: "2026-01-08",
    },
    {
      originalUrl: "https://example.com/very-long-url-2",
      shortCode: "x7Kgdsfg9mP",
      shortUrl: "https://short.ly/x7K9mP",
      clicks: 8,
      createdAt: "2026-01-07",
    },
    {
      originalUrl: "https://example.com/very-long-url-3",
      shortCode: "ZydsfgsdT56sL",
      shortUrl: "https://short.ly/ZyT56L",
      clicks: 25,
      createdAt: "2026-01-06",
    },
        {
      originalUrl: "https://example.com/very-long-url-1",
      shortCode: "abc1gsdgs2a3",
      shortUrl: "https://short.ly/abc123",
      clicks: 12,
      createdAt: "2026-01-08",
    },
    {
      originalUrl: "https://example.com/very-long-url-2",
      shortCode: "x7K9mdgfsdgafP",
      shortUrl: "https://short.ly/x7K9mP",
      clicks: 8,
      createdAt: "2026-01-07",
    },
    {
      originalUrl: "https://example.com/very-long-url-3",
      shortCode: "asfasfZyT56L",
      shortUrl: "https://short.ly/ZyT56L",
      clicks: 25,
      createdAt: "2026-01-06",
    },
        {
      originalUrl: "https://example.com/very-long-url-1",
      shortCode: "abc1fasfas23",
      shortUrl: "https://short.ly/abc123",
      clicks: 12,
      createdAt: "2026-01-08",
    },
    {
      originalUrl: "https://example.com/very-long-url-2",
      shortCode: "x7Kfdfds9mP",
      shortUrl: "https://short.ly/x7K9mP",
      clicks: 8,
      createdAt: "2026-01-07",
    },
    {
      originalUrl: "https://example.com/very-long-url-3",
      shortCode: "ZyT5dfas6L",
      shortUrl: "https://short.ly/ZyT56L",
      clicks: 25,
      createdAt: "2026-01-06",
    },
  ];

  const handleCopy = (shortUrl: string) => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied to clipboard!"); // Replace with toast in real app
  };

  const handleDelete = (shortCode: string) => {
    console.log("Delete URL:", shortCode);
    // TODO: Call API to delete
  };

  return (
    <div
      className="overflow-x-auto border"
      style={{ borderColor: "var(--surface-border)" }}
    >
      <Table>
        <TableCaption style={{ color: "white" }}>
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
          {urls.map((url) => (
            <TableRow
              key={url.shortCode}
              className="bg-(--background-color) h-15"
            >
              <TableCell className="text-(--primary)">{url.shortCode}</TableCell>
              <TableCell className="flex items-center gap-2 text-(--primary)">
                {url.shortUrl}
                <button onClick={() => handleCopy(url.shortUrl)}>
                  <Copy className="w-4 h-4 text-(--primary) cursor-pointer" />
                </button>
              </TableCell>
              <TableCell className="text-(--primary)">{url.clicks}</TableCell>
              <TableCell className="text-(--primary)">{url.createdAt}</TableCell>
              <TableCell>
                <button onClick={() => handleDelete(url.shortCode)}>
                  <Trash2 className="w-4 h-4 text-red-500 cursor-pointer" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </div>
  );
};

export default DashboardTable;
