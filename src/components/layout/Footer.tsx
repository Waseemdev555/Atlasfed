"use client";

import Link from "next/link";
import { Linkedin, Lock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-navy-800 border-t border-white/10" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-silver to-blue-accent rounded-lg flex items-center justify-center text-navy-900 font-bold">
                A
              </div>
              <span className="text-silver font-bold">AFT</span>
            </div>
            <p className="text-text-light text-small leading-relaxed mb-6">
              Delivering intelligent, modernized IT solutions to federal, state,
              and local government agencies, built for mission-critical outcomes.
            </p>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-accent hover:text-blue-light transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* Corporate Information */}
          <div>
            <h3 className="text-h3 mb-6 text-text-light">Corporate Info</h3>
            <div className="space-y-3 text-small text-text-light">
              <p>
                <span className="font-semibold">UEI:</span> PJ7VN7MMCBG5
              </p>
              <p>
                <span className="font-semibold">CAGE CODE:</span> 13KL1
              </p>
              <p>
                <span className="font-semibold">DUNS NUMBER:</span> 119513977
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-h3 mb-6 text-text-light">Contact Us</h3>
            <div className="space-y-3 text-small text-text-light">
              <p>
                <a
                  href="mailto:info@atlasfedtech.com"
                  className="hover:text-blue-accent transition-colors"
                >
                  info@atlasfedtech.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+1234567890"
                  className="hover:text-blue-accent transition-colors"
                >
                  (000) 000-0000
                </a>
              </p>
              <p>
                <a
                  href="fax:+1234567890"
                  className="hover:text-blue-accent transition-colors"
                >
                  Fax: (000) 000-0000
                </a>
              </p>
              <p>
                99 NW 183rd St Suite 131E
                <br />
                North Miami Beach, FL 33169
              </p>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h3 className="text-h3 mb-6 text-text-light">Visit Us</h3>
            <p className="text-small text-text-light mb-4">
              99 NW 183rd St Suite 131E
              <br />
              North Miami Beach, FL 33169
            </p>
            <div className="w-full h-40 bg-navy-900 rounded-lg border border-white/10 flex items-center justify-center text-text-light">
              <div className="text-center">
                <Lock size={24} className="mx-auto mb-2 opacity-50" />
                <p className="text-xs">Map Location</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-small text-text-light">
            <Lock size={16} />
            <span>Secure. Scalable. Mission-Driven.</span>
          </div>
          <p className="text-small text-text-light">
            ATLAS Federal Technologies, Inc. © 2026. All rights reserved.
            atlasfedtech.com
          </p>
        </div>
      </div>
    </footer>
  );
};
