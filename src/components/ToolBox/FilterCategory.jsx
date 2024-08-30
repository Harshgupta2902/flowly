import React from "react";
import Link from "next/link";

const items = [
  {
    title: "All",
  },
  {
    title: "AI",
    subItems: [
      {
        key: "ai",
        name: "AI Design",
        tags: ["ai", "ai-powered"],
        title: "Artificial Intelligence",
      },
    ],
  },
  {
    title: "UI",
    subItems: [
      {
        key: "accessibility",
        name: "Accessibility",
        tags: ["accessibility", "contrast"],
        title: "Accessibility Tools",
      },
      {
        key: "color",
        name: "Color",
        tags: ["color", "colour", "colors"],
        title: "Color Tools",
      },
      {
        key: "css",
        name: "CSS",
        tags: ["css"],
        title: "CSS Tools",
      },
      {
        key: "icons",
        name: "Icons",
        tags: ["icons"],
        title: "Icon Packs",
      },
      {
        key: "illustration",
        name: "Illustration",
        tags: ["illustration", "illustrations"],
        title: "Illustration Kits",
      },
    ],
  },
  {
    title: "UX",
    moreLink: { url: "/toolbox/ux-tools/page/1", text: "All UX →" },
    subItems: [
      {
        key: "analysis",
        name: "User Analysis",
        tags: [
          "testing",
          "analytics",
          "user-analytics",
          "interview",
          "persona",
        ],
        title: "User Analysis Tools",
      },
      {
        key: "journey",
        name: "User Journey",
        tags: ["journey", "journey-map", "user-flow"],
        title: "User Journey Tools",
      },
      {
        key: "research",
        name: "User Research",
        tags: ["exploration", "research", "user-research"],
        title: "User Research Tools",
      },
    ],
  },
  {
    title: "Plugins",
    subItems: [
      {
        key: "xd",
        name: "Adobe XD",
        tags: ["xd", "adobe-xd", "xd-plugin"],
        title: "Adobe XD Plugins",
      },
      {
        key: "figma",
        name: "Figma",
        tags: ["figma", "figma-plugin"],
        title: "Figma Plugins",
      },
      // {
      //   key: "marvel",
      //   name: "Marvel",
      //   tags: ["marvel", "marvel-app"],
      //   title:"Marvel Plugins"
      // },
      {
        key: "sketch",
        name: "Sketch",
        tags: ["sketch", "sketch-app", "sketch-plugin"],
        title: "Sketch Plugins",
      },
    ],
    // moreLink:{url:'/toolbox/plugins/page/1'},
  },
  {
    title: "Prototyping",
    moreLink: { url: "/prototyping/page/1", text: "All Prototyping →" },
    subItems: [
      {
        key: "design",
        name: "Design",
        tags: ["prototyping", "design-tool", "prototyping-tool"],
        title: "Design Tools",
      },
      {
        key: "handoff",
        name: "Handoff",
        tags: ["handoff", "design-to-code"],
        title: "Design Handoff Tools",
      },
      {
        key: "interactions",
        name: "Interactions",
        tags: ["microinteractions", "interactions", "animation"],
        title: "Interaction Design Tools",
      },
    ],
  },
  {
    title: "Mixed Reality",
    moreLink: {
      url: "/toolbox/augmented-reality-tools/page/1",
      text: "All VR/AR →",
    },
    subItems: [
      {
        key: "ar",
        name: "Augmented Reality",
        tags: ["ar", "augmented-reality"],
        title: "Mixed Reality Tools",
      },
      {
        key: "vr",
        name: "Virtual Reality",
        tags: ["vr", "virtual-reality"],
        title: "Virtual Reality Tools",
      },
    ],
  },
  {
    title: "Chat",
    moreLink: {
      url: "/toolbox/conversational-design-tools/page/1",
      text: "All Chat Tools →",
    },
    subItems: [
      {
        key: "chatbots",
        name: "Chat Bots",
        tags: ["chat", "chat-bot"],
        title: "Chat Design Tools",
      },
    ],
  },
];

export default function FilterCategory({ slug = "", key }) {
  return (
    <div className="display-none lg:block text-gray-800">
      <h1 className="font-semibold pb-2 mb-6 text-xl capitalize text-gray-900 tracking-tight">
        Categories
      </h1>
      {items?.map((item, index) => {
        return (
          <>
            {item?.subItems ? (
              <div key={`${key}${index}`} className="text-gray-800 mb-10">
                <div className="">
                  <h1 className="font-semibold pb-2 pr-3 text-lg capitalize text-gray-900 tracking-tight">
                    {item.title}
                  </h1>
                </div>
                {item?.subItems?.map((sItem, sIndex) => {
                  return (
                    <div
                      className="cursor-pointer text-md"
                      key={`toolbox_cat_${sIndex}`}
                    >
                      <Link href={""}>
                        <div
                          className={`text-base hover:text-blue-500 py-1.5 rounded ${
                            sItem.key == slug
                              ? "text-blue-600 font-semibold"
                              : "text-gray-700 font-base"
                          }`}
                        >
                          {sItem.name}
                        </div>
                      </Link>
                    </div>
                  );
                })}
                {item.moreLink?.text ? (
                  <Link href={item.moreLink.url}>
                    <span className="inline-block text-gray-700 hover:text-blue-600 font-medium underline mt-4 mb-6 text-sm">
                      {item.moreLink.text}
                    </span>
                  </Link>
                ) : (
                  <div className="mb-6" />
                )}
              </div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}
