import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import RichText from "../Components/RichText";
import LargeModal from "../Components/LargeModal";
import { Triangle } from "react-loader-spinner"

export default function LearningPath({ data }) {
  useEffect(() => {
    setTreeData(data);
  }, [data]);

  const [treeData, setTreeData] = useState(data);

  if (!treeData) {
    // Show loading or some other UI while fetching the data
    return <div className='w-full h-screen flex flex-row justify-center items-center'><Triangle height={'100'} width={'100'} color='#132043' /> </div>;
  }

  return (
    <div className="w-full border-2">
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
  const foreignObjectProps = { width: nodeSize.x, height: "1500", x: 70 };

  return (
    <div
      id="treeWrapper"
      style={containerStyles}
    >
      <Tree
        data={treeData}
        initialDepth={1}
        orientation="vertical"
        renderCustomNodeElement={(rd3tProps) => (
          <RenderForeignObjectNode
            {...rd3tProps}
            foreignObjectProps={foreignObjectProps}
            showModal={showModal}
            handleButtonClick={handleButtonClick}
            onNodeClick={handleButtonClick}
          />
        )}
        translate={{
          x: 300,
          y: 50,
        }}
        nodeSize={nodeSize}
        transitionDuration={5000}
        zoomable={true}
        draggable={true}
        zoom={1}
        styles={{
          nodes: {
            node: {
              circle: {
                fill: '#ffffff',
              },
              attributes: {
                stroke: '#000',
              },
            },
            leafNode: {
              circle: {
                fill: 'transparent',
              },
              attributes: {
                stroke: '#000',
              },
            },
          },
        }}
      // enableLegacyTransitions={true}
      />
    </div>
  );
}

const containerStyles = {
  width: "full",
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
          <div className="max-w-sm w-fit py-2 px-8 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
