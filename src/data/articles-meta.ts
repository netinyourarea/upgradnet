import internetHero from "../assets/internet-hero.jpg";
import fiber from "../assets/fiber.jpg";
import wifi from "../assets/wifi.jpg";
import cable from "../assets/cable.jpg";
import compare from "../assets/compare.jpg";
import smartHome from "../assets/smart-home.jpg";
import work from "../assets/work.jpg";
import coverage from "../assets/coverage.jpg";
import type { ArticleMeta } from "./article-types";

export const ARTICLES_META: readonly ArticleMeta[] = [
  {
    path: "/internet-service-assistance",
    category: "Internet",
    h1: "Internet Service Assistance: A Practical Guide to Home Internet Help",
    metaTitle: "Internet Service Help: Fix Home Internet Issues | Upgrade Net",
    metaDescription:
      "Home internet not working? Follow our step-by-step internet help guide to fix slow Wi-Fi, outages and connection issues across the USA.",
    ogTitle: "Internet Service Help: Fix Your Home Internet Fast",
    ogDescription:
      "A plain-English guide to fixing slow, dropping or dead home internet. Step-by-step checks for cable, fiber, DSL and Wi-Fi users in the USA.",
    summary:
      "Find the cause of a home internet problem, fix it step by step and know when it belongs to your provider.",
    image: internetHero,
    alt: "Laptop open on a marble table in a bright apartment",
  },
  {
    path: "/broadband-connection-assistance",
    category: "Internet",
    h1: "Broadband Connection Help: A Complete Guide to Home Broadband Setup and Troubleshooting",
    metaTitle: "Broadband Connection Help: Home Broadband Setup & Troubleshooting",
    metaDescription:
      "How home broadband works, the types of connection in the US, how to set it up and how to fix common broadband problems, in plain language.",
    ogTitle: "Broadband Connection Help: Setup and Troubleshooting",
    ogDescription:
      "Fiber, cable, DSL, fixed wireless and satellite compared, plus setup steps and fixes for the most common broadband problems.",
    summary:
      "Fiber, cable, DSL, fixed wireless and satellite compared, plus setup and fixes for common broadband problems.",
    image: fiber,
    alt: "Glowing fiber optic strands against a dark background",
  },
  {
    path: "/wifi-setup-troubleshooting",
    category: "Wi-Fi",
    h1: "WiFi Setup and WiFi Troubleshooting: A Complete Home Guide",
    metaTitle: "WiFi Setup & Troubleshooting Guide: Fix WiFi Problems Fast",
    metaDescription:
      "WiFi not working or keeps disconnecting? Learn how to set up WiFi at home, fix common WiFi problems, and improve your wireless network signal step by step.",
    ogTitle: "WiFi Setup & Troubleshooting: A Practical Home Guide",
    ogDescription:
      "Step-by-step help to set up home WiFi, fix connection drops, and get a stronger, more reliable wireless network.",
    summary:
      "Set up WiFi properly, fix drops and dead zones, and choose between 2.4 GHz, 5 GHz, extenders and mesh.",
    image: wifi,
    alt: "White Wi-Fi router on an oak console table",
  },
  {
    path: "/cable-tv-services",
    category: "Cable TV",
    h1: "Cable TV Problems? A Complete Guide to Fixing Your Cable TV and Connection",
    metaTitle: "Cable TV Not Working? Fix Signal & Connection Problems",
    metaDescription:
      "Cable TV not working? Learn how to fix no signal, pixelation, cable box errors and connection issues with simple step-by-step troubleshooting you can do at home.",
    ogTitle: "Cable TV Not Working? A Simple Guide to Fixing It",
    ogDescription:
      "Step-by-step help for no signal, frozen cable boxes, missing channels and loose cable connections. Try these fixes before you call your provider.",
    summary:
      "Fix No Signal, frozen pictures, missing channels and cable box problems before you call your provider.",
    image: cable,
    alt: "Dark home cinema room with warm wall lighting and a large screen",
  },
  {
    path: "/internet-troubleshooting",
    category: "Internet",
    h1: "Internet Troubleshooting: How to Fix Slow Internet, WiFi, and Connection Problems",
    metaTitle: "Internet Troubleshooting: Fix Slow Internet & WiFi Issues",
    metaDescription:
      "Slow internet or WiFi not working? Follow our step-by-step internet troubleshooting guide to fix connection problems, dropouts, and slow speeds at home.",
    ogTitle: "Internet Troubleshooting Guide: Fix Slow Internet & WiFi Problems",
    ogDescription:
      "Simple, step-by-step fixes for slow internet, WiFi not working, and internet that keeps disconnecting. Works for cable, fiber, DSL, and wireless home internet.",
    summary:
      "A twelve-step process for slow internet, WiFi that will not connect and connections that keep dropping.",
    image: compare,
    alt: "Hands holding a tablet on a bright desk",
  },
  {
    path: "/router-setup-assistance",
    category: "Wi-Fi",
    h1: "Router Setup Assistance: Your Complete Guide to WiFi Router Setup and Troubleshooting",
    metaTitle: "Router Setup Guide: WiFi Router Setup & Troubleshooting",
    metaDescription:
      "Easy WiFi router setup guide for US homes. Connect your modem and router, change your WiFi password and fix common router problems step by step.",
    ogTitle: "Router Setup Made Simple: Step-by-Step WiFi Guide",
    ogDescription:
      "Set up your modem and router, secure your WiFi and fix connection problems with this clear, beginner-friendly guide.",
    summary:
      "Modem versus router, a nine-step setup, changing passwords and fixing a router that will not connect.",
    image: smartHome,
    alt: "Hand touching a wall-mounted smart home control panel",
  },
  {
    path: "/home-internet-plans-guide",
    category: "Plans",
    h1: "Home Internet Plans: A Simple Guide to Choosing the Right Plan",
    metaTitle: "Home Internet Plans Guide: Compare Speeds & Costs",
    metaDescription:
      "Compare home internet plans with confidence. Learn what internet speed you need, how fiber, cable and 5G differ and how to spot hidden fees.",
    ogTitle: "How to Choose the Right Home Internet Plan (USA Guide)",
    ogDescription:
      "A plain-English guide to internet speeds, connection types, real monthly costs and the questions to ask before you sign up.",
    summary:
      "How much speed you need, how connection types differ, what a plan really costs and how to compare step by step.",
    image: work,
    alt: "Bright home office with a laptop open on a video call",
  },
  {
    path: "/network-troubleshooting",
    category: "Internet",
    h1: "Network Troubleshooting Guide: How to Fix Home Network and Internet Connection Issues",
    metaTitle: "Network Troubleshooting Guide: Fix Home Wi-Fi & LAN Issues",
    metaDescription:
      "Internet not working? Follow our step-by-step network troubleshooting guide to fix Wi-Fi, Ethernet and home network connection problems quickly and safely.",
    ogTitle: "Network Troubleshooting Made Simple: Fix Your Home Connection",
    ogDescription:
      "A plain-English guide to fixing Wi-Fi drops, slow internet, and Ethernet problems, plus how to set up a reliable home network.",
    summary:
      "Find where a home network problem starts, fix Wi-Fi and Ethernet issues and set up a network that stays reliable.",
    image: coverage,
    alt: "Aerial view of a sunlit residential neighborhood",
  },
];
