"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const stats = [
    {
      value: 120,
      suffix: "+",
      label: "Events Conducted",
    },
    {
      value: 35,
      suffix: "+",
      label: "Student Clubs",
    },
    {
      value: 4000,
      suffix: "+",
      label: "Students Supported",
    },
    {
      value: 24,
      suffix: "/7",
      label: "Support Availability",
    },
  ];

  return (
    <section className="w-full bg-[#F8F5EE] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-8
            rounded-3xl
            border
            border-neutral-200
            bg-neutral-50
            p-8
          "
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold">
                <Counter
                  end={stat.value}
                  suffix={stat.suffix}
                />
              </h3>

              <p className="mt-3 text-sm md:text-base text-neutral-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}