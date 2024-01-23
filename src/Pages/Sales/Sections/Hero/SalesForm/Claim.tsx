export const Clain = ({ connect = false, tokenCount = 0, token = '' }) => {
    return (
        <div className="claim">
            {!connect ?
                <>
                    <div className="title">
                        The token sale ended successfully
                    </div>
                    <div className="text">
                        connect your wallet to claim tokens
                    </div>
                </>
                :
                <>
                    <div className="text">
                        Your tokens
                    </div>
                    {tokenCount ?
                        <>
                            <div className="title">
                                {tokenCount}
                            </div>
                            <div className="token">
                                {token}
                            </div>
                        </>
                        :
                        <div className="token">
                            You do not have any claimed tokens
                        </div>
                    }

                </>
            }
        </div >
    )
}