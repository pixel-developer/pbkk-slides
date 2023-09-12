import { motion } from "framer-motion";
import { GanttChartSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tabItems = [
  {
    title: "Laravel",
    description: (
      <p>
        {`// Kerangka kerja (framework) pengembangan perangkat lunak berbasis PHP
        yang sangat populer.`}
      </p>
    ),
  },
  {
    title: "XAMPP",
    description: (
      <p>
        {`// Dengan menggunakan XAMPP, kita dapat membuat situs web dan aplikasi web
        di komputer kita sendiri tanpa perlu menghubungkannya ke internet.`}
      </p>
    ),
  },
  {
    title: "Composer",
    description: (
      <div>
        <p>
          {`// Composer adalah alat yang digunakan dalam pengembangan perangkat lunak
          untuk mengelola dan mengatur dependensi (pustaka, paket, atau modul)
          yang diperlukan oleh sebuah proyek. Analoginya seperti aplikasi Steam
          dalam dunia game.`}
        </p>
        <br />
        <p>
          {`// Bayangkan Anda ingin memainkan berbagai jenis game pada komputer Anda.
          Steam adalah platform yang memungkinkan Anda mengunduh, menginstal,
          dan mengelola semua game tersebut. Tanpa Steam, Anda harus mencari,
          mengunduh, dan menginstal setiap game secara manual dari berbagai
          sumber. Ini bisa menjadi tugas yang rumit dan memakan waktu.`}
        </p>
      </div>
    ),
  },
];

export default function Slide3() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0,
            duration: 0.001,
          },
        }}
        transition={{
          delay: 0.5,
        }}
        className="flex items-center space-x-4 rounded-md border p-4 shadow flex-shrink-0"
      >
        <GanttChartSquare />
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">
            An Overview of Composer, XAMPP, and Laravel
          </p>
        </div>
      </motion.div>
      <motion.div
        className="mt-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0,
          },
        }}
        transition={{ duration: 0.75, delay: 1 }}
      >
        <Tabs defaultValue="Laravel" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Laravel">Laravel</TabsTrigger>
            <TabsTrigger value="XAMPP">XAMPP</TabsTrigger>
            <TabsTrigger value="Composer">Composer</TabsTrigger>
          </TabsList>
          {tabItems.map((item, i) => (
            <TabsContent value={item.title} key={item.title}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </>
  );
}
