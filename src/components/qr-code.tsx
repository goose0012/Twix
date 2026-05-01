import { Flex, For, QrCode } from "@chakra-ui/react"


function QRCode() {
  return (
    <Flex gap="4">
      <For each={["#00ff33", "#FF0000"]}>
        {(fill) => (
          <QrCode.Root key={fill} value="https://youtu.be/_IFEJs3WS_Y?si=1u85AEvV65FwYoFw">
            <QrCode.Frame style={{ fill }}>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
        )}
      </For>
    </Flex>
  )
}

export default QRCode;