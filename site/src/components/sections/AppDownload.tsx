import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function AppDownload() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left: Text + Store badges */}
          <div className="flex-1">
            <h2 className="text-[40px] font-extrabold text-[#10173E] leading-[48px] tracking-[0.4px] mb-4">
              Download the App
            </h2>
            <p className="text-[#7A7A7A] text-lg mb-8">
              Download our app, setup an account or sign in, and book your
              session!
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/badges/app-store.webp"
                  alt="Download on the App Store"
                  width={150}
                  height={50}
                  className="h-auto"
                />
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/badges/google-play.webp"
                  alt="Get it on Google Play"
                  width={150}
                  height={50}
                  className="h-auto"
                />
              </a>
            </div>
          </div>

          {/* Right: App mockup */}
          <div className="flex-shrink-0">
            <Image
              src="/images/content/app-mockup.webp"
              alt="Oxygen Wellness App"
              width={300}
              height={600}
              className="h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
