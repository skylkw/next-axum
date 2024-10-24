import Icon404 from "@/assets/svg/icon-404.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-5">
        <div className="max-w-md space-y-8">
          <div className="text-5xl font-bold">404</div>
          <p className="text-2xl md:text-3xl font-light leading-normal">
            抱歉，我们找不到这个页面。
          </p>
          <Button asChild>
            <Link href="/">返回主页</Link>
          </Button>
        </div>
        <div className="max-w-lg">
          <Image src={Icon404} alt="404" />
        </div>
      </div>
    </div>
  );
}
