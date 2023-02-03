import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

const Chart = (props) => {
    const { options, series, width, height, type } = props.chartData;
    return (
        <>
            <ReactApexChart
                options={options}
                series={series}
                type={type}
                width={width}
                height={height}
            />
        </>
    );
};

export default Chart;
