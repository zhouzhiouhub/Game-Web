const fs = require('fs');

// Fix navbar.tsx
const navbarPath = 'src/components/layout/navbar.tsx';
let navbar = fs.readFileSync(navbarPath, 'utf8');

// Add Image import if not present
if (!navbar.includes('import Image from "next/image"')) {
  navbar = navbar.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport Image from "next/image";'
  );
}

// Replace text-only logo with logo image + text
navbar = navbar.replace(
  /<Link href="\/" className="flex items-center gap-2 font-bold text-lg">\s*<span className="rgb-full bg-clip-text text-transparent">\s*Gaming RGB\s*<\/span>\s*<\/Link>/,
  `<Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Gaming RGB Software"
            width={32}
            height={32}
            priority
          />
          <span className="font-bold text-lg rgb-full bg-clip-text text-transparent">
            Gaming RGB
          </span>
        </Link>`
);

fs.writeFileSync(navbarPath, navbar, 'utf8');
console.log('Fixed navbar.tsx');

// Fix footer.tsx
const footerPath = 'src/components/layout/footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

// Add Image import if not present
if (!footer.includes('import Image from "next/image"')) {
  footer = footer.replace(
    'import Link from "next/link";',
    'import Link from "next/link";\nimport Image from "next/image";'
  );
}

// Replace text-only logo in footer with logo image + text
footer = footer.replace(
  /<Link href="\/" className="text-lg font-bold rgb-full bg-clip-text text-transparent">\s*Gaming RGB\s*<\/Link>/,
  `<Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Gaming RGB Software"
                width={28}
                height={28}
              />
              <span className="text-lg font-bold rgb-full bg-clip-text text-transparent">
                Gaming RGB
              </span>
            </Link>`
);

fs.writeFileSync(footerPath, footer, 'utf8');
console.log('Fixed footer.tsx');
const fs = require('fs');

// Fix navbar.tsx - replace text logo with SVG image
const navbarPath = 'src/components/layout/navbar.tsx';
let navbar = fs.readFileSync(navbarPath, 'utf8');

navbar = navbar.replace(
  /import Link from "next\/link";\nimport \{ useState \} from "react";\nimport \{ Menu, X, Github, ChevronDown \} from "lucide-react";/,
  'import Link from "next/link";\nimport Image from "next/image";\nimport { useState } from "react";\nimport { Menu, X, Github, ChevronDown } from "lucide-react";'
);

navbar = navbar.replace(
  `{/* Logo */}\n        <Link href="/" className="flex items-center gap-2 font-bold text-lg">\n          <span className="rgb-full bg-clip-text text-transparent">\n            Gaming RGB\n          </span>\n        </Link>`,
  `{/* Logo */}\n        <Link href="/" className="flex items-center gap-2">\n          <Image\n            src="/logo.svg"\n            alt="Gaming RGB Software"\n            width={32}\n            height={32}\n            priority\n          />\n          <span className="font-bold text-lg rgb-full bg-clip-text text-transparent">\n            Gaming RGB\n          </span>\n        </Link>`
);

fs.writeFileSync(navbarPath, navbar, 'utf8');
console.log('Fixed navbar.tsx');

// Fix footer.tsx - replace text logo with SVG image
const footerPath = 'src/components/layout/footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

footer = footer.replace(
  /import Link from "next\/link";\nimport \{ Github, Twitter \} from "lucide-react";/,
  'import Link from "next/link";\nimport Image from "next/image";\nimport { Github, Twitter } from "lucide-react";'
);

footer = footer.replace(
  `<Link href="/" className="text-lg font-bold rgb-full bg-clip-text text-transparent">\n              Gaming RGB\n            </Link>`,
  `<Link href="/" className="flex items-center gap-2">\n              <Image\n                src="/logo.svg"\n                alt="Gaming RGB Software"\n                width={28}\n                height={28}\n              />\n              <span className="text-lg font-bold rgb-full bg-clip-text text-transparent">\n                Gaming RGB\n              </span>\n            </Link>`
);

fs.writeFileSync(footerPath, footer, 'utf8');
console.log('Fixed footer.tsx');
