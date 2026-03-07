import { Smartphone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function AppDownload() {
  return (
    <section className="py-16 md:py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Icon */}
          <div className="w-24 h-24 rounded-2xl bg-brand-primary/10 flex items-center justify-center">
            <Smartphone className="w-12 h-12 text-brand-primary" />
          </div>

          {/* Text & Buttons */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Download Our App
            </h2>
            <p className="text-lg text-brand-text/70 mb-6 max-w-md">
              Book sessions, manage your account, and track your wellness
              journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE.apps.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-dark px-6 py-3 font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href={SITE.apps.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-dark px-6 py-3 font-semibold text-white hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.08c.44 0 .82-.38.82-.82V8.27c0-.44-.38-.82-.82-.82s-.82.38-.82.82v14c0 .44.38.81.82.81zm17.64 0c.44 0 .82-.38.82-.82V8.27c0-.44-.38-.82-.82-.82s-.82.38-.82.82v14c0 .44.38.81.82.81zM14.54 1.43l1.4-2.16c.12-.18.07-.43-.12-.55-.18-.12-.43-.07-.55.12L13.8 1.05C13.25.89 12.65.8 12.02.8c-.65 0-1.26.1-1.82.27L8.74-1.16c-.12-.18-.37-.23-.55-.12-.18.12-.24.37-.12.55l1.38 2.13C7.54 2.5 6.2 4.48 6.2 6.8h11.6c0-2.31-1.32-4.29-3.26-5.37zM9.3 4.83c-.35 0-.63-.28-.63-.63s.28-.63.63-.63.63.28.63.63-.28.63-.63.63zm5.4 0c-.35 0-.63-.28-.63-.63s.28-.63.63-.63.63.28.63.63-.28.63-.63.63zM6.2 8.27v12.18c0 .45.36.82.82.82h1.09v3.91c0 .44.38.82.82.82s.82-.38.82-.82v-3.91h2.5v3.91c0 .44.38.82.82.82s.82-.38.82-.82v-3.91h1.09c.45 0 .82-.36.82-.82V8.27H6.2z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
