
import {Card, List} from "@chakra-ui/react";

export default function FeatureCard({ title, bgColor, items }: { title: string; bgColor: string; items: string[] }) {
    return (
        <Card.Root borderWidth={2} minWidth={1/3} bgColor={bgColor} rounded={"xl"} m={3} shadow={"xl"} shadowColor={"blackAlpha.950"} >
            <Card.Header textStyle={"3xl"}> {title} </Card.Header>
            
            <hr />
            <Card.Body>
                <List.Root  py={2} mx={4} my={2}>
                {items.map((item, index) => (
                    <List.Item key={index} _marker={{ color: "inherit" }}>{item}</List.Item>
                ))}
    
            </List.Root>
            </Card.Body>
            
        </Card.Root>)
}