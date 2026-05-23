"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Wand2,
  ImageIcon,
  Cable as Cube,
  ShoppingBag,
  PenTool,
  MessageCircle,
  Users,
  BarChart3,
  Mountain,
  Calculator,
  Palette,
  Layout,
  Sparkles,
  IndianRupee,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "AI Generator", href: "/ai-generator", icon: Wand2 },
  { name: "Design Feed", href: "/design-feed", icon: ImageIcon },
  { name: "AR Placement", href: "/ar-placement", icon: Cube },
  { name: "Smart Shopping", href: "/shopping", icon: ShoppingBag },
  { name: "Floor Plans", href: "/floor-plans", icon: PenTool },
  { name: "AI Materials", href: "/ai-materials", icon: Sparkles },
  { name: "AI Budget", href: "/ai-budget", icon: IndianRupee },
  { name: "AI Colors", href: "/ai-colors", icon: Palette },
  { name: "AI Layout", href: "/ai-layout", icon: Layout },
  { name: "Vastu", href: "/vastu", icon: Mountain },
  { name: "Project Management", href: "/project-management/cost-estimator", icon: Calculator },
  { name: "AI Assistant", href: "/assistant", icon: MessageCircle },
  { name: "Collaborate", href: "/collaborate", icon: Users },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
]

export function Navigation() {
  const pathname = usePathname()

  const handleNavClick = (href: string, name: string) => {
    console.log("Navigation clicked:", name, "->", href)
  }

  return (
    <nav className="hidden md:block fixed left-0 top-0 z-40 h-screen w-72 bg-sidebar border-r border-sidebar-border shadow-xl">
      <div className="flex h-full flex-col">
        <div className="flex h-20 items-center px-6 border-b border-sidebar-border bg-gradient-to-r from-sidebar to-sidebar-accent/20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg dark:bg-slate-100">
              <Cube className="h-6 w-6 text-white dark:text-slate-900" />
            </div>
            <span className="font-bold text-slate-900 text-lg dark:text-slate-100">AR Interior</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2 px-4">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={cn(
                    "flex items-center gap-4 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 group",
                    isActive
                      ? "bg-slate-900 text-white shadow-md scale-[1.02] border border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-300"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:scale-[1.01] hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
                  )}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900"
                      : "bg-slate-100 text-slate-600 group-hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:group-hover:bg-slate-700"
                  )}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="truncate">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="border-t border-sidebar-border p-4 space-y-3 bg-gradient-to-t from-sidebar-accent/10 to-transparent">
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}