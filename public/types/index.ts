import React, { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
    title :string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchmanufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}


export interface FilterProps {
    manufacturer?: string;
    year?: number;
    fuel?: string;
    limit?: number;
    model?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
  }

export interface OptionsProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionsProps[];
    setFilter: Dispatch<SetStateAction<string>>;
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: Dispatch<SetStateAction<string>>
}