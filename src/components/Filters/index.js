import React from "react";
import {
  Container,
  FlexRow,
  FiltersLabel,
  FilterValue,
  SourcesIcon,
  SelectArrow,
  Divider,
  TimeFrameIcon,
  HelpIcon,
} from "./styled";

/**
 * Dummy Filters Component
 */
function Filters() {
  return (
    <Container>
      <FlexRow>
        <FlexRow>
          <FiltersLabel>Filters:</FiltersLabel>
          <FilterValue>
            <SourcesIcon width={25} height={20} title="Sources" />
            My Sources
            <SelectArrow size={20} />
          </FilterValue>
          <Divider />
          <FilterValue>
            <TimeFrameIcon size={20} title="Timeframe" />
            Past Month
            <SelectArrow size={20} />
          </FilterValue>
        </FlexRow>

        <HelpIcon size={20} title="Help" />
      </FlexRow>
    </Container>
  );
}

export default Filters;
