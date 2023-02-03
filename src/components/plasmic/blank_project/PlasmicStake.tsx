// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2cuDFUXxXegfBqeyzrcCDf
// Component: TK_mjQnmcM
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 2cuDFUXxXegfBqeyzrcCDf/projectcss
import sty from "./PlasmicStake.module.css"; // plasmic-import: TK_mjQnmcM/css

export type PlasmicStake__VariantMembers = {};
export type PlasmicStake__VariantsArgs = {};
type VariantPropType = keyof PlasmicStake__VariantsArgs;
export const PlasmicStake__VariantProps = new Array<VariantPropType>();

export type PlasmicStake__ArgsType = {};
type ArgPropType = keyof PlasmicStake__ArgsType;
export const PlasmicStake__ArgProps = new Array<ArgPropType>();

export type PlasmicStake__OverridesType = {
  layer12?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
};

export interface DefaultStakeProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicStake__RenderFunc(props: {
  variants: PlasmicStake__VariantsArgs;
  args: PlasmicStake__ArgsType;
  overrides: PlasmicStake__OverridesType;

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

  const [isLayer12Hover, triggerLayer12HoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_layer12: isLayer12Hover
  };

  return (
    <div
      data-plasmic-name={"layer12"}
      data-plasmic-override={overrides.layer12}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.layer12
      )}
      data-plasmic-trigger-props={[triggerLayer12HoverProps]}
    >
      {(triggers.hover_layer12 ? true : false) ? (
        <h3
          data-plasmic-name={"h3"}
          data-plasmic-override={overrides.h3}
          className={classNames(
            projectcss.all,
            projectcss.h3,
            projectcss.__wab_text,
            sty.h3
          )}
        >
          {"STAKE"}
        </h3>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  layer12: ["layer12", "h3"],
  h3: ["h3"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  layer12: "div";
  h3: "h3";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicStake__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicStake__VariantsArgs;
    args?: PlasmicStake__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicStake__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicStake__ArgsType,
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
          internalArgPropNames: PlasmicStake__ArgProps,
          internalVariantPropNames: PlasmicStake__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicStake__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "layer12") {
    func.displayName = "PlasmicStake";
  } else {
    func.displayName = `PlasmicStake.${nodeName}`;
  }
  return func;
}

export const PlasmicStake = Object.assign(
  // Top-level PlasmicStake renders the root element
  makeNodeComponent("layer12"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),

    // Metadata about props expected for PlasmicStake
    internalVariantProps: PlasmicStake__VariantProps,
    internalArgProps: PlasmicStake__ArgProps
  }
);

export default PlasmicStake;
/* prettier-ignore-end */
