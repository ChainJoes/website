import React from 'react';

interface ConnectModalProps {
    connect: (connector: any) => void;
    connectors: any[];
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ connect, connectors, setShowModal }) => {
    return (
        <div className="connect-modal" onClick={() => setShowModal(false)}>
            <div className="wrap" onClick={(e) => e.stopPropagation()}>
                <h3 className="title">Connect wallet</h3>
                <h5 className="text">
                    Connect with one of our available wallet providers or create a new one.
                </h5>
                <div className="connectors">
                    {connectors.map((connector, index) => (
                        <div
                            className="connector btn"
                            key={`connector-${index}`}
                            onClick={() => {
                                connect(connector);
                            }}
                        >
                            {connector.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ConnectModal;
