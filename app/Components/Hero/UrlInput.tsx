"use client"

import { useEffect, useState } from "react";
import Button from "../CommonButton/CommonButton";
import { useHandleGenrateShortLinkMutation } from "@/lib/features/api/apiSlice";
import useAuthContext from "../Hook/useAuthContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


const UrlInput = () => {
  const [url, setUrl] = useState('');
  const router = useRouter()
  const { user } = useAuthContext()
  const [handleGenrateShortLink, { data, isError, isSuccess, }] = useHandleGenrateShortLinkMutation()



  useEffect(() => {

    if (isSuccess && data) {
      toast(data.message)
    }
    if (isError) {
      toast("something went wrong try agin.")
    }


  }, [isSuccess, data, isError, router])


  const handleGenerate = async () => {
    if (!user) {
      toast("Please login first")
    }

    if (user && !url) {
      toast.info("Please provide a URL")
    }

    if (user && url) {
      await handleGenrateShortLink(url).unwrap()
      router.push('/dashboard')
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your long URL here..."
          className="flex-1 px-4 py-3 rounded-md bg-transparent outline-none focus:ring-2 transition-all duration-200"
          style={{
            border: '2px solid var(--surface-border)',
            color: 'var(--primary)'
          }}

        />
        <Button  onClick={handleGenerate}>Generate</Button>
      </div>
    </div>
  );
};

export default UrlInput