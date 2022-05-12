import React from "react";
import ComponentDetail from "./ComponentDetail";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container">
      <ApprovalCard>
        <ComponentDetail
          author="Max"
          avata={faker.image.avatar()}
          time="10AM 2022"
          text="How artistic!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Bob"
          avata={faker.image.avatar()}
          time="10AM 2022"
          text="How artistic!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <ComponentDetail
          author="Susan"
          avata={faker.image.avatar()}
          time="10AM 2022"
          text="How artistic!"
        />
      </ApprovalCard>
    </div>
  );
};
export default App;
