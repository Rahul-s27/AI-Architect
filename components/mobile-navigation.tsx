"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
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
  Menu,
  X,
  MoreHorizontal,
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

const bottomTabs = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "AI Gen", href: "/ai-generator", icon: Wand2 },
  { name: "AR", href: "/ar-placement", icon: Cube },
  { name: "Feed", href: "/design-feed", icon: ImageIcon },
  { name: "More", href: "#", icon: MoreHorizontal, isMore: true },
]

export function MobileNavigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false)

  const handleNavClick = (href: string, name: string) => {
    console.log("Navigation clicked:", name, "->", href)
    setIsMenuOpen(false)
    setIsMoreMenuOpen(false)
  }

  const handleMoreClick = () => {
    setIsMoreMenuOpen(!isMoreMenuOpen)
  }

  return (
    <>
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-lg">
        <div className="flex h-16 items-center justify-between px-4 bg-gradient-to-r from-background to-muted/20">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg dark:bg-slate-100">
              <Cube className="h-5 w-5 text-white dark:text-slate-900" />
            </div>
            <span className="font-bold text-slate-900 text-base dark:text-slate-100">AR Interior</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-11 w-11 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed left-0 top-0 bottom-0 w-80 bg-background border-r border-border transform transition-transform duration-300 overflow-y-auto",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-16 items-center justify-between px-4 border-b border-border bg-gradient-to-r from-background to-muted/20">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg dark:bg-slate-100">
                <Cube className="h-5 w-5 text-white dark:text-slate-900" />
              </div>
              <span className="font-bold text-slate-900 text-base dark:text-slate-100">AR Interior</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="h-11 w-11 flex items-center justify-center rounded-lg hover:bg-accent transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="py-4">
            <div className="space-y-1 px-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={cn(
                      "flex items-center gap-4 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 min-h-[44px] group",
                      isActive
                        ? "bg-slate-900 text-white shadow-md scale-[1.02] border border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-300"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:scale-[1.01] hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
                    )}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-100"
                        : "bg-muted group-hover:bg-slate-100 group-hover:text-slate-900",
                    )}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="truncate">{item.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="border-t border-border p-3 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-sm text-muted-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* More Menu Overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
          isMoreMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMoreMenuOpen(false)}
      >
        <div
          className={cn(
            "fixed bottom-20 left-4 right-4 bg-background border border-border rounded-lg shadow-lg transform transition-all duration-300 max-h-96 overflow-y-auto",
            isMoreMenuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-2">
            <div className="space-y-1">
              {navigation.slice(5).map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href, item.name)}
                    className={cn(
                      "flex items-center gap-4 rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 min-h-[44px] group",
                      isActive
                        ? "bg-slate-900 text-white shadow-md scale-[1.02] border border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-300"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:scale-[1.01] hover:shadow-sm dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
                    )}
                  >
                    <div className={cn(
                      "flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200",
                      isActive 
                        ? "bg-slate-700 text-white dark:bg-slate-300 dark:text-slate-100"
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
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-background border-t border-border">
        <div className="flex items-center justify-around h-20 pb-safe">
          {bottomTabs.map((tab) => {
            const isActive = pathname === tab.href
            
            if (tab.isMore) {
              return (
                <button
                  key={tab.name}
                  onClick={handleMoreClick}
                  className={cn(
                    "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[44px] min-h-[44px]",
                    isMoreMenuOpen
                      ? "text-accent-foreground bg-accent"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <tab.icon className="h-5 w-5" />
                  <span className="text-xs font-medium">{tab.name}</span>
                </button>
              )
            }

            return (
              <Link
                key={tab.name}
                href={tab.href}
                onClick={() => handleNavClick(tab.href, tab.name)}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[44px] min-h-[44px]",
                  isActive
                    ? "text-accent-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{tab.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Add padding for mobile bottom navigation */}
      <div className="md:hidden h-20" />
    </>
  )
}