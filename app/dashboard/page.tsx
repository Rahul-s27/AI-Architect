'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Wand2,
  PenTool,
  Compass,
  Camera,
  Palette,
  Sparkles,
  LayoutDashboard,
  IndianRupee,
  Layout,
  MessageCircle,
  Users,
  BarChart3,
  Mountain,
  Calculator,
  ChevronRight,
  Home,
  Cable as Cube,
  Maximize2,
  Minimize2,
  X,
  FolderOpen,
  DollarSign
} from 'lucide-react';
import DashboardARPlacement from '@/components/DashboardARPlacement';

// Complete list of all features
const allFeatures = [
  { title: 'Dashboard', description: 'Overview and quick access', icon: Home, href: '/dashboard' },
  { title: 'AI Generator', description: 'AI-powered interior design generation', icon: Wand2, href: '/ai-generator' },
  { title: 'Design Feed', description: 'Architecture and interior design inspiration', icon: Camera, href: '/design-feed' },
  { title: 'AR Placement', description: 'Augmented reality furniture placement', icon: LayoutDashboard, href: '/ar-placement' },
  { title: 'Smart Shopping', description: 'Interior design product shopping', icon: LayoutDashboard, href: '/shopping' },
  { title: 'Floor Plans', description: 'Floor plan generation and editing', icon: PenTool, href: '/floor-plans' },
  { title: 'AI Materials', description: 'Material suggestions and recommendations', icon: Sparkles, href: '/ai-materials' },
  { title: 'AI Budget', description: 'Budget planning and cost estimation', icon: IndianRupee, href: '/ai-budget' },
  { title: 'AI Colors', description: 'Color palette generation', icon: Palette, href: '/ai-colors' },
  { title: 'AI Layout', description: 'Room layout optimization', icon: Layout, href: '/ai-layout' },
  { title: 'Vastu', description: 'Vastu Shastra analysis and guidance', icon: Mountain, href: '/vastu' },
  { title: 'Project Management', description: 'Cost estimation and project planning', icon: Calculator, href: '/project-management/cost-estimator' },
  { title: 'AI Assistant', description: 'Chat with AI for design advice', icon: MessageCircle, href: '/assistant' },
  { title: 'Collaborate', description: 'Team collaboration features', icon: Users, href: '/collaborate' },
  { title: 'Analytics', description: 'Design analytics and insights', icon: BarChart3, href: '/analytics' }
];

export default function DashboardPage() {
  const [showARPlacement, setShowARPlacement] = useState(false);
  const [arFullscreen, setArFullscreen] = useState(false);

  const handleARPlacementToggle = () => {
    setShowARPlacement(!showARPlacement);
    setArFullscreen(false);
  };

  const handleARFullscreenToggle = () => {
    setArFullscreen(!arFullscreen);
  };

  const handleARClose = () => {
    setShowARPlacement(false);
    setArFullscreen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="p-4 md:ml-72 md:p-8">
        <div className="space-y-8">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 p-8 md:p-16 text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="relative z-10">
              <div className="mb-2">
                <span className="inline-block px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-slate-300 bg-slate-900/40 rounded-full backdrop-blur-sm border border-slate-600/50">
                  Welcome to the Future
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
                <span className="block text-white drop-shadow-lg">Transform Your Space</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-white to-slate-200 font-extrabold drop-shadow-md">with AI-Powered Design</span>
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 text-slate-200 max-w-4xl leading-relaxed italic">
                Where imagination meets innovation. Design your dream interior with cutting-edge AI technology and augmented reality.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="group bg-slate-900/60 backdrop-blur-md rounded-xl px-6 py-3 border border-slate-600/50 hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="text-sm font-black uppercase tracking-wide text-slate-100 group-hover:text-white transition-colors">✨ 50+ Design Styles</span>
                </div>
                <div className="group bg-slate-900/60 backdrop-blur-md rounded-xl px-6 py-3 border border-slate-600/50 hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="text-sm font-black uppercase tracking-wide text-slate-100 group-hover:text-white transition-colors">🎨 AI-Powered Suggestions</span>
                </div>
                <div className="group bg-slate-900/60 backdrop-blur-md rounded-xl px-6 py-3 border border-slate-600/50 hover:bg-slate-900/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <span className="text-sm font-black uppercase tracking-wide text-slate-100 group-hover:text-white transition-colors">📱 AR Preview</span>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-slate-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-slate-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-950 dark:to-purple-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-violet-900 dark:text-violet-100">Creative Projects</CardTitle>
                <div className="p-2 bg-violet-500 rounded-lg">
                  <FolderOpen className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-violet-900 dark:text-violet-100">12</div>
                <p className="text-sm text-violet-700 dark:text-violet-300">Spaces transformed</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-purple-900 dark:text-purple-100">AI Designs</CardTitle>
                <div className="p-2 bg-purple-500 rounded-lg">
                  <Palette className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-900 dark:text-purple-100">48</div>
                <p className="text-sm text-purple-700 dark:text-purple-300">Unique creations</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-green-900 dark:text-green-100">AR Experiences</CardTitle>
                <div className="p-2 bg-green-500 rounded-lg">
                  <Cube className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-900 dark:text-green-100">23</div>
                <p className="text-sm text-green-700 dark:text-green-300">Immersive previews</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-950 dark:to-orange-900">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-semibold text-yellow-900 dark:text-yellow-100">Smart Savings</CardTitle>
                <div className="p-2 bg-yellow-500 rounded-lg">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-yellow-900 dark:text-yellow-100">$2.4k</div>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">Budget optimized</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Quick Actions */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
              <CardHeader>
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Start Creating</CardTitle>
                <CardDescription className="text-base">Transform your ideas into reality</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <Button className="w-full justify-start h-12 text-base font-semibold bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600">
                    <Wand2 className="mr-3 h-5 w-5" />
                    ✨ Generate AI Design
                  </Button>
                  <Button className="w-full justify-start h-12 text-base font-semibold" variant="outline">
                    <Cube className="mr-3 h-5 w-5" />
                    🎯 Try AR Preview
                  </Button>
                  <Button className="w-full justify-start h-12 text-base font-semibold" variant="outline">
                    <LayoutDashboard className="mr-3 h-5 w-5" />
                    🛍️ Smart Shopping
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Tool */}
            <Card className="md:col-span-2 border-0 shadow-xl bg-gradient-to-br from-violet-50 via-white to-purple-50 dark:from-violet-950 dark:via-slate-900 dark:to-purple-950">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
                    <Wand2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">AI Design Studio</CardTitle>
                    <CardDescription className="text-base">Where dreams become designs</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    🎨 Experience the future of interior design with our revolutionary AI that understands your style, space, and vision to create breathtaking designs tailored just for you.
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <span className="text-2xl">✨</span> Magic Features
                      </h4>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>50+ Design Styles</strong> - From minimalist to maximalist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>Smart Room Analysis</strong> - Optimized for your space</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>Color Harmony</strong> - Perfect palette every time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span><strong>3D Visualization</strong> - See your future space</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-lg flex items-center gap-2">
                        <span className="text-2xl">🏠</span> Transform Spaces
                      </h4>
                      <ul className="space-y-2 text-base">
                        <li className="flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span><strong>Living Rooms</strong> - Entertainment paradise</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span><strong>Bedrooms</strong> - Your personal sanctuary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span><strong>Kitchens</strong> - Culinary creativity hub</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-violet-500 mt-1">•</span>
                          <span><strong>Home Offices</strong> - Productivity powerhouse</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 shadow-lg">
                    🚀 Start Creating Magic
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AR Placement Section */}
          {showARPlacement && (
            <div className="mb-6">
              <DashboardARPlacement
                isFullscreen={arFullscreen}
                onToggleFullscreen={handleARFullscreenToggle}
                onClose={handleARClose}
              />
            </div>
          )}

          {!showARPlacement && (
            <div className="text-center">
              <Button onClick={handleARPlacementToggle} className="h-14 text-lg font-semibold gap-3 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 shadow-lg">
                <Cube className="h-6 w-6" />
                🎯 Try AR Placement Now
              </Button>
            </div>
          )}

          {/* All Features */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Design Toolkit</CardTitle>
              <CardDescription className="text-base">Everything you need to create amazing spaces</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {allFeatures.map((feature) => (
                  <Link key={feature.title} href={feature.href}>
                    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/50 transition-all duration-200 group hover:scale-[1.02] hover:shadow-md">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-200">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-base group-hover:text-primary transition-colors">{feature.title}</div>
                        <div className="text-sm text-muted-foreground truncate">{feature.description}</div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-200" />
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950 dark:to-teal-900">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Creative Journey</CardTitle>
              <CardDescription className="text-base text-emerald-700 dark:text-emerald-300">Your latest design adventures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-emerald-900 dark:text-emerald-100">🎨 Living Room Masterpiece</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-300">Completed 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-violet-100/50 dark:bg-violet-900/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-violet-900 dark:text-violet-100">🎯 AR Magic Session</p>
                    <p className="text-sm text-violet-700 dark:text-violet-300">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-lg bg-purple-100/50 dark:bg-purple-900/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-purple-900 dark:text-purple-100">💰 Smart Budget Update</p>
                    <p className="text-sm text-purple-700 dark:text-purple-300">1 day ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tips & Inspiration */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50 dark:from-rose-950 dark:via-orange-950 dark:to-amber-950">
            <CardHeader>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-orange-600 bg-clip-text text-transparent">Design Inspiration</CardTitle>
              <CardDescription className="text-base">Stay ahead with the latest design trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <span className="text-2xl">🔥</span> Trending Styles
                  </h4>
                  <ul className="space-y-3 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-rose-500 text-xl mt-1">✨</span>
                      <div>
                        <strong>Minimalist Scandinavian</strong>
                        <p className="text-sm text-muted-foreground">Clean lines, cozy comfort</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 text-xl mt-1">🌿</span>
                      <div>
                        <strong>Biophilic Design</strong>
                        <p className="text-sm text-muted-foreground">Nature indoors, wellness</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-violet-500 text-xl mt-1">🏠</span>
                      <div>
                        <strong>Smart Home Integration</strong>
                        <p className="text-sm text-muted-foreground">Tech meets comfort</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-500 text-xl mt-1">🌍</span>
                      <div>
                        <strong>Sustainable Living</strong>
                        <p className="text-sm text-muted-foreground">Eco-friendly choices</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    <span className="text-2xl">🎨</span> 2024 Color Palette
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-stone-200 to-stone-400 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-stone-300 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-semibold">Earthy Neutrals</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-200 to-purple-400 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-purple-300 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-semibold">Digital Lavender</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-200 to-orange-400 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-orange-300 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-semibold">Bold Terracotta</p>
                    </div>
                    <div className="bg-gradient-to-br from-violet-200 to-violet-400 p-3 rounded-lg text-center">
                      <div className="w-8 h-8 bg-violet-300 rounded-full mx-auto mb-2"></div>
                      <p className="text-sm font-semibold">Mystic Violet</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
