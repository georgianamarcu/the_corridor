import { useEffect, useRef } from "react";
import styled from "styled-components";
import * as echarts from "echarts";
import LoadingScreen from "./LoadingScreen";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
interface HealthContainerProps {
  $active: boolean;
}

const MainOverlayContainer = () => {
  const loadingScreenRef = useRef();
  const { progress } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      gsap.to(loadingScreenRef.current, {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          loadingScreenRef.current.style.display = "none";
        },
      });
    }
  }, [progress]);

  useEffect(() => {
    //Gauge
    const chartDom = document.getElementById("gauge");
    const myChart = echarts.init(chartDom);
    const option = {
      decal: true,
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 60,
          splitNumber: 12,
          itemStyle: {
            color: "rgba(0, 255, 255, 0.5)",
          },
          progress: {
            show: true,
            width: 30,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              width: 30,
              color: [
                [0.2, "rgba(0, 255, 255, 0.4)"],
                [0.8, "rgba(0, 255, 255, 0.4)"],
                [1, "rgba(250, 16, 86, 0.5)"],
              ],
              decal: {
                symbol: "rect",
                symbolSize: 2,
                dashArrayX: [1, 2],
                dashArrayY: [2, 2],
                color: "rgba(255, 255, 255, 0.9)",
              },
            },
          },
          axisTick: {
            distance: -55,
            splitNumber: 5,
            lineStyle: {
              width: 1,
              color: "rgba(0, 255, 255, 0.4)",
            },
          },
          splitLine: {
            distance: -52,
            length: 14,
            lineStyle: {
              width: 1,
              color: "rgba(0, 255, 255, 0.6)",
            },
          },
          axisLabel: {
            distance: -5,
            color: "rgba(0, 255, 255, 0.4)",
            fontSize: 10,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: false,
            width: "60%",
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 0,
            fontWeight: "bolder",
            formatter: "",
            color: "inherit",
          },
          data: [
            {
              value: 20,
            },
          ],
        },
        {
          type: "gauge",
          center: ["50%", "60%"],
          startAngle: 200,
          endAngle: -10,
          min: 0,
          max: 60,
          itemStyle: {
            color: "rgba(0, 255, 255, 0)",
          },
          progress: {
            show: true,
            width: 8,
          },
          pointer: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            show: false,
          },
          data: [
            {
              value: 20,
            },
          ],
        },
      ],
    };

    myChart.setOption(option);

    setInterval(() => {
      const random = +(Math.random() * 60).toFixed(2);
      myChart.setOption({
        series: [
          {
            data: [
              {
                value: random,
              },
            ],
          },
          {
            data: [
              {
                value: random,
              },
            ],
          },
        ],
      });
    }, 1000);
  }, []);

  return (
    <>
      <Div>
        <Container>
          <div className="corner-cut top-left"></div>
          <div className="corner-cut top-right"></div>
          <div className="corner-cut bottom-left"></div>
          <div className="corner-cut bottom-right"></div>
          <div className="screen-overlay"></div>
          <div className="text-container">
            <p className="main-text skew">RADIATION LEVEL</p>
            <p className="back-text glitch">RADIATION LEVEL</p>
          </div>
          <Gauge id="gauge" />
        </Container>
      </Div>
      <HealthContainer>
        {Array.from({ length: 12 }, (_, index) => (
          <Rectangle key={index} $active={index < 8} />
        ))}
      </HealthContainer>
      <HealthText>70</HealthText>
      <SVGElement />
      <LoadingScreen ref={loadingScreenRef} />
    </>
  );
};

export default MainOverlayContainer;

const Div = styled.div`
  position: absolute;
  width: 300px;
  height: 250px;
  z-index: 999;
  left: 50px;
  top: 50px;
  perspective: 900px;
`;

const Container = styled.div`
  width: 300px;
  height: 250px;
  background: rgba(0, 255, 255, 0.2);
  opacity: 0.9;
  border: 1px solid rgba(0, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 5px;
  padding: 20px;
  position: relative;
  transform: rotateY(30deg) rotateX(-20deg);
  transform-style: preserve-3d;
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4);

  &:before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid rgba(0, 255, 255, 0.9);
    opacity: 0.7;
    border-radius: 5px;
    z-index: -1;
    transform: translateZ(-1px);
  }

  & .corner-cut {
    position: absolute;
    width: 30px;
    height: 30px;
    background: rgba(0, 255, 255, 0.2);
    opacity: 0.7;
  }

  & .corner-cut.top-left {
    top: -6%;
    left: -4%;
    border-radius: 5px;
    border-top: 1px solid rgba(0, 255, 255, 0.8);
    border-left: 1px solid rgba(0, 255, 255, 0.8);
    clip-path: polygon(0 0, 100% 0, 0 100%);
  }

  & .corner-cut.top-right {
    top: -6%;
    right: -4%;
    border-radius: 5px;
    border-top: 1px solid rgba(0, 255, 255, 0.8);
    border-right: 1px solid rgba(0, 255, 255, 0.8);
    clip-path: polygon(100% 0, 100% 100%, 0 0);
  }

  & .corner-cut.bottom-left {
    bottom: -6%;
    left: -4%;
    border-radius: 5px;
    border-bottom: 1px solid rgba(0, 255, 255, 0.8);
    border-left: 1px solid rgba(0, 255, 255, 0.8);
    clip-path: polygon(0 100%, 100% 100%, 0 0);
  }

  & .corner-cut.bottom-right {
    bottom: -6%;
    right: -4%;
    border-radius: 5px;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
    border-bottom: 1px solid rgba(0, 255, 255, 0.8);
    border-right: 1px solid rgba(0, 255, 255, 0.8);
  }

  & .screen-overlay {
    background: linear-gradient(
      rgba(0, 255, 255, 0.3),
      transparent 2px,
      transparent 3px,
      transparent 2px
    );
    height: 100%;
    width: 100%;
    background-size: 100% 9px;
    animation: pan-overlay 22s infinite linear;
    position: absolute;
    z-index: 2;
    left: 0px;
    top: 0px;
    border-radius: 20px;
  }

  @keyframes pan-overlay {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 100% 100%;
    }
  }

  @-webkit-keyframes pan-overlay {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 100% 100%;
    }
  }

  @-moz-keyframes pan-overlay {
    from {
      background-position: 0% 0%;
    }
    to {
      background-position: 100% 100%;
    }
  }

  & .text-container {
    position: relative;
  }

  & .main-text {
    display: inline-block;
    opacity: 0.7;
    color: #fff;
    position: absolute;
    top: 0;
    left: 16%;
  }

  & .back-text {
    width: 100%;
    left: 0;
    opacity: 0.2;
    display: inline-block;
    color: rgba(0, 255, 255, 0.8);
    position: absolute;
    top: 0;
    left: 16%;
  }

  & .skew {
    animation: skew 0.95s infinite alternate;
  }

  & .glitch {
    animation: glitch 0.9s infinite alternate;
  }
  @keyframes skew {
    0% {
      transform: skew(0deg);
    }
    20% {
      transform: skew(0deg);
    }
    24% {
      transform: skew(-7deg);
    }
    28% {
      transform: skew(0deg);
    }
    70% {
      transform: skew(0deg);
    }
    74% {
      transform: skew(10deg);
    }
    78% {
      transform: skew(0deg);
    }
    100% {
      transform: skew(0deg);
    }
  }

  @keyframes glitch {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    20% {
      transform: translate3d(0, 0, 0);
      opacity: 0.3;
    }
    24% {
      transform: translate3d(5px, 4px, 0);
      opacity: 1;
    }
    28% {
      transform: translate3d(0, 0, 0);
    }
    60% {
      transform: translate3d(0, 0, 0);
    }
    64% {
      transform: translate3d(-4px, -3px, 0);
    }
    68% {
      transform: translate3d(0, 0, 0);
    }
    70% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    74% {
      opacity: 0.3;
      transform: translate3d(10px, -6px, 0);
    }
    78% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const Gauge = styled.div`
  width: 90%;
  height: 100%;
  position: absolute;
  top: 20%;
  left: 5%;
`;

const HealthContainer = styled.div`
  position: absolute;
  right: 2%;
  bottom: 5%;
  z-index: 9999;
  border: 1px solid rgba(0, 255, 255, 0.8);
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  gap: 4px;
  width: 110px;
  height: 50px;
`;

const Rectangle = styled.div<HealthContainerProps>`
  width: 4px;
  height: 100%;
  background-color: ${(props) =>
    props.$active ? "rgba(0, 255, 255, 0.8)" : "rgba(0, 255, 255, 0.3)"};
`;

const HealthText = styled.p`
  position: absolute;
  z-index: 999;
  color: rgba(0, 255, 255, 0.8);
  font-size: 60px;
  right: 10%;
  bottom: 3.5%;
`;

const SVGElement = styled.div`
  width: 50%;
  height: 100px;
  position: absolute;
  z-index: 999;
  bottom: 0;
  left: 25%;
  background-image: url("/element.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
