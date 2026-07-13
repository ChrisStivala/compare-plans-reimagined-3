import * as React from 'react';
export type IconName =
  | "BoxedReward"
  | "CalendarDatesLine"
  | "ChargeLine"
  | "ChevronLeftSmallSolid"
  | "EVPowerUpLine"
  | "ElectricCarLine"
  | "ElectricityLine"
  | "EnergySavingsLeafLine"
  | "InfoGrey300Line"
  | "MenuLine"
  | "PlusLine"
  | "PromoTagLine"
  | "SearchSolid"
  | "SolarLine"
  | "SpikeLine"
  | "VerifiedUserSolid";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
