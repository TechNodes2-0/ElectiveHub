import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Tree from "react-d3-tree";
import RichText from "../Components/RichText";
import LargeModal from "../Components/LargeModal";
import { Triangle } from "react-loader-spinner";

export default function LearningPath({ data }) {
  console.log(data);
  useEffect(() => {
    setTreeData(data);
  }, [data]);

  const [treeData, setTreeData] = useState(data);

  if (!treeData) {
    // Show loading or some other UI while fetching the data
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center">
        <Triangle height={"100"} width={"100"} color="#132043" />{" "}
      </div>
    );
  }

  return (
    <div>
      <OrgChartTree treeData={treeData} />
    </div>
  );
}

function OrgChartTree({ treeData }) {
  const handleButtonClick = () => {
    setShowModal(!showModal);
  };
  const [showModal, setShowModal] = useState(false);
  const nodeSize = { x: 900, y: 400 };
  const treeRef = useRef();
  const foreignObjectProps = {
    width: nodeSize.x,
    height: "1500",
    x: 70,
  };

  const centerNode = (node) => {
    const { width, height } = node.getBoundingClientRect();
    const tree = treeRef.current;

    const { x: initialX, y: initialY } = tree.props.translate;
    const x = width / 2;
    const y = height / 4;

    const parentNode = document.getElementsByClassName(
      `${tree.gInstanceRef}`
    )[0];

    const transform = parentNode.getAttribute("transform");

    parentNode.removeAttribute("transform");
    parentNode.setAttribute(
      "transform",
      `translate(${initialX + x}, ${initialY + y})`
    );
  };

  useEffect(() => {
    if (treeData) {
      centerNode(document.getElementById("treeWrapper"));
    }
  }, []);

  return (
    <div
      id="treeWrapper"
      style={containerStyles}
      className="border-4 border-black"
    >
      <Tree
        ref={treeRef}
        data={treeData}
        initialDepth={1}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) => (
          <RenderForeignObjectNode
            {...rd3tProps}
            foreignObjectProps={foreignObjectProps}
            showModal={showModal}
            handleButtonClick={handleButtonClick}
            onNodeClick={() => handleButtonClick()}
          />
        )}
        nodeSize={nodeSize}
        // enableLegacyTransitions={true}
      />
    </div>
  );
}

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const RenderForeignObjectNode = ({
  nodeDatum,
  toggleNode,
  foreignObjectProps,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(!showModal);
  };

  return (
    <g>
      <circle r={35} onClick={toggleNode} />
      <foreignObject
        width={foreignObjectProps.width}
        height={foreignObjectProps.height}
        x={foreignObjectProps.x}
      >
        {!showModal && (
          <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-white">
                {nodeDatum?.name}
              </h5>
            </a>
            {nodeDatum.attributes?.title && (
              <div className="p-4 text-white">{nodeDatum.attributes.title}</div>
            )}
            {nodeDatum.attributes?.article && (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                type="button"
                onClick={handleButtonClick}
              >
                Toggle modal
              </button>
            )}
          </div>
        )}

        {showModal && (
          <LargeModal
            nodeDatum={nodeDatum}
            handleButtonClick={handleButtonClick}
          >
            {nodeDatum?.attributes?.article && (
              <RichText articleId={nodeDatum.attributes.article} />
            )}
          </LargeModal>
        )}
      </foreignObject>
    </g>
  );
};
