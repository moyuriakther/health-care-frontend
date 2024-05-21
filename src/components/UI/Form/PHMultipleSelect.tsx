import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { timeFormatter } from "@/utils/timeFormatter";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  schedules,
  selectedScheduleIds,
  setSelectedScheduleIds,
}: any) {
  const theme = useTheme();

  const handleChange = (
    event: SelectChangeEvent<typeof selectedScheduleIds>
  ) => {
    const {
      target: { value },
    } = event;
    setSelectedScheduleIds(
      typeof value === "string" ? value.split(",") : value
    );
  };
  // console.log(schedules);
  return (
    <Box>
      <FormControl fullWidth={true}>
        <InputLabel id="demo-multiple-chip-label">Selected Slots</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedScheduleIds}
          onChange={handleChange}
          input={
            <OutlinedInput id="select-multiple-chip" label="Select Schedule" />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => {
                const selectedSchedule = schedules.find(
                  (schedule: any) => schedule.id === value
                );
                if (!selectedSchedule) return null;

                const formattedTimeSlot = `${timeFormatter(
                  selectedSchedule.startDateTime
                )} - ${timeFormatter(selectedSchedule.endDateTime)}`;
                return <Chip key={value} label={formattedTimeSlot} />;
              })}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {schedules?.map((schedule: any) => (
            <MenuItem
              key={schedule.id}
              value={schedule.id}
              style={getStyles(schedule.id, selectedScheduleIds, theme)}
            >
              {`${timeFormatter(schedule.startDateTime)} - ${timeFormatter(
                schedule.endDateTime
              )}`}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}