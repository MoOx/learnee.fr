import { ComponentType } from "react";

export type ReactFromSvgComponentProps = React.SVGProps<SVGSVGElement> & {
  fills?: (string | undefined)[];
};

export type ReactFromSvgComponent = ComponentType<ReactFromSvgComponentProps>;

function normaliseStringAsDashed(str: string) {
  return str.replace(/[^a-zA-Z0-9]/g, "-");
}

function calculateGradientCoordinates(angle: number): {
  x1?: number | string;
  y1?: number | string;
  x2?: number | string;
  y2?: number | string;
} {
  const radians = (angle * Math.PI) / 180;
  const x1 = 0.5 + 0.5 * Math.cos(radians + Math.PI);
  const y1 = 0.5 + 0.5 * Math.sin(radians + Math.PI);
  const x2 = 0.5 + 0.5 * Math.cos(radians);
  const y2 = 0.5 + 0.5 * Math.sin(radians);
  return {
    x1: x1.toString(),
    y1: y1.toString(),
    x2: x2.toString(),
    y2: y2.toString(),
  };
}

export default function SvgWithGradient({
  svg: SvgToTransform,
  colors: gradientColors,
  angle = 45,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  svg: ReactFromSvgComponent;
  colors: (string[] | false)[];
  angle?: number;
}) {
  const gradientIds = gradientColors.map((c) =>
    c ? `gradient-${c.map(normaliseStringAsDashed).join("-")}` : undefined
  );
  const fills = gradientIds.map((id) => `url(#${id})`);
  return (
    <SvgToTransform fills={fills} {...props}>
      {gradientColors.map((c, index) => {
        const gradientId = gradientIds[index];
        if (!c || !gradientId) return null;
        return (
          <linearGradient
            key={gradientId}
            id={gradientId}
            {...calculateGradientCoordinates(angle)}
          >
            {c.map((color, index) => {
              const offsetPercentage = ((index / (c.length - 1)) * 100).toFixed(
                2
              );
              return (
                <stop
                  key={`${color}-${index}`}
                  stopColor={color}
                  offset={`${offsetPercentage}%`}
                />
              );
            })}
          </linearGradient>
        );
      })}
    </SvgToTransform>
  );
}
