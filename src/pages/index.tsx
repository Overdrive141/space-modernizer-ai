import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>141 Development Studios - DreamRoomGPT</title>
        <meta name="description" content="Dream and keep on dreaming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Work In Progress - 141 Development Studios&nbsp;</p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <div className={styles.thirteen}>
                <Image
                  src="/141logo.png"
                  alt="Vercel Logo"
                  // className={styles.vercelLogo}
                  width={100}
                  height={100}
                />
                {/* Add Animated 141 Studios that appears one letter one by one */}
              </div>
            </a>
          </div>
        </div>

        <div className={styles.center}>
          {/* <div className={styles.thirteen}>
            <Image
              // className={styles.logo}
              src="/141logo.png"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div> */}

          <div className={styles.grid}>
            <Link
              // href="https://replicate.com/stability-ai/stable-diffusion"
              href="/stable-diffusion"
              className={styles.card}
              // target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                className={`${inter.className} font-[600] text-2xl mb-[0.7rem]`}
              >
                Stable Diffusion 2<span>-&gt;</span>
              </h2>

              <p
                className={`${inter.className} text-lg m-0 opacity-[0.6] leading-6 max-w-[30ch]`}
              >
                Dream something with stability-ai/stable-diffusion
              </p>
            </Link>

            <Link
              href="/room-gpt"
              className={styles.card}
              // target="_blank"
              rel="noopener noreferrer"
            >
              <h2
                className={`${inter.className} font-[600] text-2xl mb-[0.7rem]`}
              >
                Room Modernizer<span>-&gt;</span>
              </h2>
              <p
                className={`${inter.className} text-lg m-0 opacity-[0.6] leading-6 max-w-[30ch]`}
              >
                Generate your dream room and more with ControlNet
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
