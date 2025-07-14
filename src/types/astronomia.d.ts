declare module 'astronomia' {
    export namespace julian {
      function CalendarToJD(year: number, month: number, day: number, gregorian?: boolean): number;
    }
    export namespace solar {
      function apparentEquatorial(jd: number): { ra: number; dec: number; range: number };
    }
    export namespace moonposition {
      function position(jd: number): { ra: number; dec: number; range: number };
    }
  }