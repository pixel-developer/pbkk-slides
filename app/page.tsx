"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ExternalLink,
  Github,
  PartyPopper,
  Sparkles,
  Swords,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div>
        <Player
          autoplay
          loop
          src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f31e/lottie.json"
          className="w-80 h-80"
        />
        <h1 className="text-4xl font-bold font-display tracking-wide">
          Exploring the Path of PBKK
        </h1>
        <Tabs defaultValue="study-materials" className="w-[440px] mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="study-materials">Study Materials</TabsTrigger>
            <TabsTrigger value="others">Others</TabsTrigger>
          </TabsList>
          <TabsContent value="study-materials">
            <Card>
              <CardHeader>
                <CardTitle>Study Materials</CardTitle>
                <CardDescription>
                  Kamu bisa mengakses semua materi pembelajaran di sini
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 h-[200px] overflow-auto relative">
                <Alert className="cursor-not-allowed opacity-40">
                  <PartyPopper className="h-4 w-4" />
                  <AlertTitle className="flex items-center">
                    <span>Pertemuan 1</span>
                    <Badge
                      variant="secondary"
                      className="rounded-[4px] ml-2 text-xs"
                    >
                      Soon
                    </Badge>
                  </AlertTitle>
                  <AlertDescription className="text-muted-foreground">
                    Perkenalan dan Pengenalan materi praktikum pembelajaran PBKK
                  </AlertDescription>
                </Alert>
                <Alert className="cursor-not-allowed opacity-40">
                  <Sparkles className="h-4 w-4" />
                  <AlertTitle className="flex items-center">
                    <span>Pertemuan 2</span>
                    <Badge
                      variant="secondary"
                      className="rounded-[4px] ml-2 text-xs"
                    >
                      Soon
                    </Badge>
                  </AlertTitle>
                  <AlertDescription className="text-muted-foreground">
                    Materi PHP OOP
                  </AlertDescription>
                </Alert>
                <Link href="/chapter-3" className="block group">
                  <Alert className="group-hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                    <Swords className="h-4 w-4" />
                    <AlertTitle>Pertemuan 3</AlertTitle>
                    <AlertDescription className="text-muted-foreground">
                      Materi Laravel Route & Blade
                    </AlertDescription>
                  </Alert>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="others">
            <Card>
              <CardHeader>
                <CardTitle>Others</CardTitle>
                <CardDescription>
                  Referensi lain yang mungkin bisa membantu kamu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 h-[200px] overflow-auto">
                <Link
                  href="https://i.ibb.co/vvh8R0s/Untitled-2023-02-20-0812.png"
                  target="_blank"
                  className="block group relative"
                >
                  <Alert className="group-hover:bg-zinc-100 transition-all duration-300 ease-in-out">
                    <Github className="h-4 w-4" />
                    <AlertTitle>Push your project to GitHub</AlertTitle>
                    <AlertDescription className="text-muted-foreground max-w-[300px]">
                      Command line untuk mengupload (push) project ke GitHub
                      repository.
                    </AlertDescription>
                    <div className="absolute right-8 -translate-y-1/2 top-1/2 z-20">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </Alert>
                </Link>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
