// import {createNavigation} from 'next-intl/navigation';
// import {routing} from './routing';
 
// // Lightweight wrappers around Next.js' navigation
// // APIs that consider the routing configuration
// export const {Link, redirect, usePathname, useRouter, getPathname} =
//   createNavigation(routing);

import { createNavigation } from "next-intl/navigation";
import { localePrefix, locales, pathnames } from "@/config";

export const { Link, getPathname, redirect, usePathname, useRouter} = 
createNavigation({
  locales, 
  pathnames, 
  localePrefix})