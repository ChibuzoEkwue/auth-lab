import React from "react";
// Import the core wrapper and the specific icon layouts
import {
  AlertCircleIcon,
  Key02Icon,
  SmartPhone01Icon,
} from "@hugeicons/core-free-icons";

import { HugeiconsIcon } from "@hugeicons/react";
export default function TwoFactorAuthCard() {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
      {/* Top right subtle background accent blur */}
      <div className="absolute top-0 right-0 -z-0 h-32 w-32 rounded-full bg-red-100/40 blur-3xl" />

      {/* Card Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            Two-Factor Authentication
          </h2>
          <p className="mt-1 text-sm text-zinc-600">
            Protects your account by requiring a second factor at sign-in.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-2.5 py-0.5 text-xs font-medium text-red-600">
          Inactive
        </span>
      </div>

      {/* Warning/Recommendation Banner */}
      <div className="relative z-10 mt-5 flex items-center gap-2.5 rounded-lg border border-red-100 bg-red-50/50 p-3 text-sm text-red-700">
        <HugeiconsIcon
          icon={AlertCircleIcon}
          size={18}
          color="currentColor"
          strokeWidth={1.5}
          className="shrink-0 text-red-600"
        />
        <p>It is strongly recommended to enable two-factor authentication.</p>
      </div>

      {/* Auth Options Container */}
      <div className="relative z-10 mt-6 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        {/* Passkeys Row */}
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 text-zinc-900">
              <HugeiconsIcon
                icon={Key02Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">Passkeys</h3>
              <p className="mt-0.5 text-sm text-zinc-500">
                Sign in with biometrics. Faster and safer than a password.
              </p>
            </div>
          </div>
          <button className="self-start rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium whitespace-nowrap text-white shadow-sm transition-colors hover:bg-zinc-800 sm:self-center">
            Add Passkey
          </button>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-zinc-200" />

        {/* Authenticator App Row */}
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
          <div className="flex items-start gap-4">
            <div className="mt-0.5 text-zinc-900">
              <HugeiconsIcon
                icon={SmartPhone01Icon}
                size={24}
                color="currentColor"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-900">
                Authenticator App (TOTP)
              </h3>
              <p className="mt-0.5 text-sm text-zinc-500">
                Use an app like 1Password, Google Authenticator, or Microsoft
                Authenticator.
              </p>
            </div>
          </div>
          <button className="self-start rounded-lg bg-zinc-950 px-5 py-2 text-sm font-medium whitespace-nowrap text-white shadow-sm transition-colors hover:bg-zinc-800 sm:self-center">
            Set Up
          </button>
        </div>
      </div>
    </div>
  );
}
