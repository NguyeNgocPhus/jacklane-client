import { Col, Row } from "antd";

import "./styles.css";
import { NodeAction } from "./nodeAction";
export const ListNodeAction = () => {

    const listAction = [
        {
            image :"",
            name:"Gửi tin nhắn message",
            description:"Gửi tin nhắn message tới khách hàng"
        },
        {
            image :"",
            name:"Gửi SMS",
            description:"Gửi SMS tới khách hàng"
        },
        {
            image :"",
            name:"Gửi Email",
            description:"Gửi Email tới khách hàng"
        }
    ]
    return (
        <>

            <Row>
                <Col span={24}>Danh sách hoạt động</Col>
                {listAction.length && listAction.map((action , index)=>{
                           return (
                            <Col span={24}>
                                <NodeAction action={action}></NodeAction>
                            </Col>
                           )
                       })}
            </Row>
        </>
    );
}