// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2cuDFUXxXegfBqeyzrcCDf
// Component: 07510c6cTnc7
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Docs from "../../Docs"; // plasmic-import: Ihxf3QEUzV/component
import Auctionz from "../../Auctionz"; // plasmic-import: kfgyQqEyCn/component
import Voidswap from "../../Voidswap"; // plasmic-import: IqSSF-3-Gh/component
import Stake from "../../Stake"; // plasmic-import: TK_mjQnmcM/component
import Socials from "../../Socials"; // plasmic-import: X_iWq4AcxZ/component
import { FollowWrapper } from "@plasmicpkgs/react-twitter-widgets"; // plasmic-import: zqQBieQcfl/codeComponent

import { useScreenVariants as useScreenVariantss4NvdSi2ApY1J } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: s4NvdSi2apY1J/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 2cuDFUXxXegfBqeyzrcCDf/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: 07510c6cTnc7/css

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  frame1?: p.Flex<"div">;
  iknklnkln1?: p.Flex<"div">;
  logo63?: p.Flex<"div">;
  bastardz2023AllRightsReserved?: p.Flex<"div">;
  socials?: p.Flex<typeof Socials>;
  group2?: p.Flex<"div">;
  logo61?: p.Flex<"div">;
  logo64?: p.Flex<"div">;
  logo62?: p.Flex<"div">;
  follow?: p.Flex<typeof FollowWrapper>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantss4NvdSi2ApY1J()
  });

  return (
    <React.Fragment>
      {}
      {true ? (
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div
              data-plasmic-name={"frame1"}
              data-plasmic-override={overrides.frame1}
              className={classNames(projectcss.all, sty.frame1)}
            >
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  data-plasmic-name={"iknklnkln1"}
                  data-plasmic-override={overrides.iknklnkln1}
                  className={classNames(projectcss.all, sty.iknklnkln1)}
                />
              ) : null}

              <div className={classNames(projectcss.all, sty.freeBox__uhbiO)}>
                <div className={classNames(projectcss.all, sty.freeBox__ftHCc)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__er3OL
                    )}
                  >
                    {"GRIND YOUR OWN TAPE"}
                  </div>
                </div>

                <div className={classNames(projectcss.all, sty.freeBox__kgeev)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ok6Az
                    )}
                  >
                    {
                      "We are the bastardz of voidlandz, the rebels, the misfits, the outcasts."
                    }
                  </div>
                </div>

                {(
                  hasVariant(globalVariants, "screen", "ipad") ? true : false
                ) ? (
                  <div
                    data-plasmic-name={"logo63"}
                    data-plasmic-override={overrides.logo63}
                    className={classNames(projectcss.all, sty.logo63)}
                  />
                ) : null}

                <div className={classNames(projectcss.all, sty.freeBox__q17Sg)}>
                  <Docs
                    className={classNames("__wab_instance", sty.docs__nvIhf)}
                  />

                  <Auctionz
                    className={classNames("__wab_instance", sty.auctionz__cPIw)}
                  />

                  <Voidswap
                    className={classNames("__wab_instance", sty.voidswap__f2K9)}
                  />

                  <Stake
                    className={classNames("__wab_instance", sty.stake__axIph)}
                  />
                </div>
              </div>

              <div
                data-plasmic-name={"bastardz2023AllRightsReserved"}
                data-plasmic-override={overrides.bastardz2023AllRightsReserved}
                className={classNames(
                  projectcss.all,
                  sty.bastardz2023AllRightsReserved
                )}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__jrjwT
                  )}
                >
                  {"Bastardz 2023, All rights reserved"}
                </div>
              </div>

              <Socials
                data-plasmic-name={"socials"}
                data-plasmic-override={overrides.socials}
                className={classNames("__wab_instance", sty.socials)}
              />

              <div
                data-plasmic-name={"group2"}
                data-plasmic-override={overrides.group2}
                className={classNames(projectcss.all, sty.group2)}
              >
                {(hasVariant(globalVariants, "screen", "mac") ? true : true) ? (
                  <div
                    data-plasmic-name={"logo61"}
                    data-plasmic-override={overrides.logo61}
                    className={classNames(projectcss.all, sty.logo61)}
                  />
                ) : null}
              </div>

              {(
                hasVariant(globalVariants, "screen", "ipad")
                  ? true
                  : hasVariant(globalVariants, "screen", "mac")
                  ? true
                  : false
              ) ? (
                <div
                  data-plasmic-name={"logo64"}
                  data-plasmic-override={overrides.logo64}
                  className={classNames(projectcss.all, sty.logo64)}
                />
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : hasVariant(globalVariants, "screen", "windows")
              ? true
              : true
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__iH0S8)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : false
              ) ? (
                <div
                  data-plasmic-name={"logo62"}
                  data-plasmic-override={overrides.logo62}
                  className={classNames(projectcss.all, sty.logo62)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly")
                  ? true
                  : false
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b8P12
                  )}
                >
                  {"GRIND YOUR OWN TAPE"}
                </div>
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <div className={classNames(projectcss.all, sty.freeBox__vMv5S)}>
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__b9DmE)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__rU01)}>
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__jfV7R)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__wc4Ul
                          )}
                        />
                      ) : null}
                    </div>
                  ) : null}
                  {(
                    hasVariant(globalVariants, "screen", "mobileOnly")
                      ? true
                      : true
                  ) ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__chQpz)}
                    >
                      {(
                        hasVariant(globalVariants, "screen", "mobileOnly")
                          ? true
                          : true
                      ) ? (
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__lvnI
                          )}
                        />
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__xVPn0)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__cllGr
                  )}
                >
                  {
                    "We are the bastardz of voidlandz, the rebels, the misfits, the outcasts."
                  }
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__cBd85)}
                />
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div className={classNames(projectcss.all, sty.freeBox__f2QDn)}>
                  <Voidswap
                    className={classNames(
                      "__wab_instance",
                      sty.voidswap__z161I
                    )}
                  />

                  <Stake
                    className={classNames("__wab_instance", sty.stake__mb6Zv)}
                  />
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox___7WzDd)}
                >
                  <Docs
                    className={classNames("__wab_instance", sty.docs__n77Sd)}
                  />

                  <Auctionz
                    className={classNames(
                      "__wab_instance",
                      sty.auctionz__bpBoq
                    )}
                  />
                </div>
              ) : null}
              {(
                hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__bIKkh
                  )}
                >
                  {"Bastardz 2023, All rights reserved"}
                </div>
              ) : null}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__lv5UV
              )}
            >
              {"Bastardz 2023, All rights reserved"}
            </div>
          ) : null}
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <FollowWrapper
              data-plasmic-name={"follow"}
              data-plasmic-override={overrides.follow}
              className={classNames("__wab_instance", sty.follow)}
              username={"plasmicapp" as const}
            />
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame1",
    "iknklnkln1",
    "logo63",
    "bastardz2023AllRightsReserved",
    "socials",
    "group2",
    "logo61",
    "logo64",
    "logo62",
    "follow"
  ],
  frame1: [
    "frame1",
    "iknklnkln1",
    "logo63",
    "bastardz2023AllRightsReserved",
    "socials",
    "group2",
    "logo61",
    "logo64"
  ],
  iknklnkln1: ["iknklnkln1"],
  logo63: ["logo63"],
  bastardz2023AllRightsReserved: ["bastardz2023AllRightsReserved"],
  socials: ["socials"],
  group2: ["group2", "logo61"],
  logo61: ["logo61"],
  logo64: ["logo64"],
  logo62: ["logo62"],
  follow: ["follow"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame1: "div";
  iknklnkln1: "div";
  logo63: "div";
  bastardz2023AllRightsReserved: "div";
  socials: typeof Socials;
  group2: "div";
  logo61: "div";
  logo64: "div";
  logo62: "div";
  follow: typeof FollowWrapper;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    frame1: makeNodeComponent("frame1"),
    iknklnkln1: makeNodeComponent("iknklnkln1"),
    logo63: makeNodeComponent("logo63"),
    bastardz2023AllRightsReserved: makeNodeComponent(
      "bastardz2023AllRightsReserved"
    ),
    socials: makeNodeComponent("socials"),
    group2: makeNodeComponent("group2"),
    logo61: makeNodeComponent("logo61"),
    logo64: makeNodeComponent("logo64"),
    logo62: makeNodeComponent("logo62"),
    follow: makeNodeComponent("follow"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Bastardz — Bid2Earn Platform",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */