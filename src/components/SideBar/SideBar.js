import React, { useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.css";

import socialDataContext from "../../context/socialDataContext";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import DataShow from "../DataShow/DataShow";

const SideBar = () => {
	const socialData = {
		History: {
			ancient_india:
				"India is a country in South Asia whose name comes from the Indus River. The name 'Bharata' is used as a designation for the country in their constitution referencing the ancient mythological emperor, Bharata, whose story is told, in part, in the Indian epic Mahabharata. According to the writings known as the Puranas (religious/historical texts written down in the 5th century CE), Bharata conquered the whole subcontinent of India and ruled the land in peace and harmony. The land was, therefore, known as Bharatavarsha (`the subcontinent of Bharata’). Hominid activity in the Indian subcontinent stretches back over 250,000 years, and it is, therefore, one of the oldest inhabited regions on the planet.",
			modern_india:
				"History of Modern India topic as a part of History is a very important section as far as the Syllabus of any competitive examination is possible, especially Civil Services exams.",
			rome:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			greece:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			france:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			usa:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			Britain:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
		},
		Geogrphy: {
			India:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			France:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			Usa:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			Latin:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
			Canada:
				"The Roman Republic, which commenced in 509 BC when kings were replaced with rule by elected senators. The period was marked by vast expansion of Roman territory. During the 5th century BC, Rome gained regional dominance in Latium, and eventually by the 3rd century BC. With the Punic Wars from 264 to 146 BC, Rome gained dominance over the Western Mediterranean, displacing",
		},
	};

	const [socialDatas, setSocialDatas] = useState(socialData);

	const useStyles = makeStyles({
		root: {
			height: "100vh",
			flexGrow: 1,
			maxWidth: 400,
			background: "#bdc3c7",
		},
	});

	const classes = useStyles();

	const showDataOnOther = (value) => {
		return <DataShow>{value}</DataShow>;
	};

	return (
		<socialDataContext.Provider value={socialDatas}>
			<TreeView
				className={classes.root}
				defaultCollapseIcon={<ExpandMoreIcon />}
				defaultExpandIcon={<ChevronRightIcon />}
				multiSelect>
				<TreeItem nodeId="1" label="History">
					<TreeItem nodeId="2" label="ancient_india">
						<DataShow
							data={socialDatas.History.ancient_india}></DataShow>
					</TreeItem>

					<TreeItem nodeId="3" label="modern_india">
						<DataShow
							data={socialDatas.History.modern_india}></DataShow>
					</TreeItem>
					<TreeItem nodeId="4" label="rome">
						<DataShow data={socialDatas.History.rome}></DataShow>
					</TreeItem>
					<TreeItem nodeId="5" label="usa">
						<DataShow data={socialDatas.History.usa}></DataShow>
					</TreeItem>
					<TreeItem nodeId="6" label="greece">
						<DataShow data={socialDatas.History.greece}></DataShow>
					</TreeItem>
					<TreeItem nodeId="7" label="france">
						<DataShow data={socialDatas.History.france}></DataShow>
					</TreeItem>
				</TreeItem>
				<TreeItem nodeId="8" label="Geogrphy">
					<TreeItem nodeId="10" label="India">
						<DataShow data={socialDatas.Geogrphy.India}></DataShow>
					</TreeItem>
					<TreeItem nodeId="11" label="France">
						<DataShow data={socialDatas.Geogrphy.France}></DataShow>
					</TreeItem>
					<TreeItem nodeId="12" label="Latin">
						<DataShow data={socialDatas.Geogrphy.Latin}></DataShow>
					</TreeItem>
					<TreeItem nodeId="13" label="USA">
						<DataShow data={socialDatas.Geogrphy.Usa}></DataShow>
					</TreeItem>
					<TreeItem nodeId="14" label="Britain">
						<DataShow data={socialDatas.Geogrphy.Canada}></DataShow>
					</TreeItem>
				</TreeItem>
			</TreeView>
		</socialDataContext.Provider>
	);
};

export default SideBar;
